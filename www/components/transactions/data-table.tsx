import type { FC } from "react"
import React, { useState } from "react"

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
  type PaginationState,
  type VisibilityState
} from "@tanstack/react-table"

import { DebounceInput } from "@/components/debounce-input"
import { ColumnVisibility } from "@/components/column-visibility"

import type { Transaction } from "@/lib/schemas/transaction"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"

import { columns } from "@/components/transactions/columns"
import { TablePagination } from "@/components/transactions/pagination"
import { UnavailableRecord } from "@/components/transactions/unavailable-record"

export type DataTableProps = {
  data: Transaction[]
}

export const DataTable: FC<DataTableProps> = ({ data }) => {
  const [globalFilter, setGlobalFilter] = React.useState("")
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10
  })

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      globalFilter,
      columnVisibility,
      pagination
    },
    onGlobalFilterChange: setGlobalFilter,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
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
          className="max-w-md"
        />
        <div className="ml-auto space-x-3">
          <Button>Create Transaction</Button>
          <ColumnVisibility
            column={table.getAllColumns().filter(col => col.getCanHide())}
          />
        </div>
      </div>
      <div className="border rounded-md">
        <Table>
          <TableHeader>{tableHeader}</TableHeader>
          <TableBody>{tableBody}</TableBody>
        </Table>
      </div>
      <div className="w-full flex items-center">
        <TablePagination
          currentPage={table.getState().pagination.pageIndex}
          pageCount={table.getPageCount()}
          nextPage={table.nextPage}
          previousPage={table.previousPage}
          canGetNextPage={table.getCanNextPage}
          canGetPreviousPage={table.getCanPreviousPage}
          setPageIndex={i => table.setPageIndex(i)}
        />
      </div>
    </>
  )
}
