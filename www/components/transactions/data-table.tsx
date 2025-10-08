import type { FC } from "react"
import {
  flexRender,
  getCoreRowModel,
  useReactTable
} from "@tanstack/react-table"

import type { Transaction } from "@/lib/schemas/transaction"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { columns } from "@/components/transactions/columns"

export type DataTableProps = {
  data: Transaction[]
}

export const DataTable: FC<DataTableProps> = ({ data }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  const tableHeader = table.getHeaderGroups().map(headerGroup => (
    <TableRow key={headerGroup.id}>
      {headerGroup.headers.map(header => (
        <TableHead key={header.id}>
          {header.isPlaceholder
            ? null
            : flexRender(header.column.columnDef.header, header.getContext())}
        </TableHead>
      ))}
    </TableRow>
  ))

  const tableBody = table.getRowModel().rows.length ? (
    table.getRowModel().rows.map(row => (
      <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
        {row.getVisibleCells().map(cell => (
          <TableCell key={cell.id}>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </TableCell>
        ))}
      </TableRow>
    ))
  ) : (
    <TableRow>
      <TableCell colSpan={columns.length} className="text-center">
        No data available
      </TableCell>
    </TableRow>
  )

  return (
    <Table>
      <TableHeader>{tableHeader}</TableHeader>
      <TableBody>{tableBody}</TableBody>
    </Table>
  )
}
