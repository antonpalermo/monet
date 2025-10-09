import type { FC } from "react"
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
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
import { UnavailableRecord } from "./unavailable-record"
import { DebounceInput } from "../debounce-input"
import React from "react"
import { Button } from "../ui/button"

export type DataTableProps = {
  data: Transaction[]
}

export const DataTable: FC<DataTableProps> = ({ data }) => {
  const [globalFilter, setGlobalFilter] = React.useState("")

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter
    },
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: "auto"
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
    <UnavailableRecord />
  )

  return (
    <>
      <div className="w-full flex items-center">
        <DebounceInput
          initialValue={globalFilter}
          onChange={val => setGlobalFilter(String(val))}
          placeholder="Search"
        />
        <div className="ml-auto space-x-3">
          <Button>Create Transaction</Button>
        </div>
      </div>
      <Table>
        <TableHeader>{tableHeader}</TableHeader>
        <TableBody>{tableBody}</TableBody>
      </Table>
    </>
  )
}
