import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from "@tanstack/react-table"

import { useTransaction } from "@/hooks/use-transaction"

import { ColumnFilter } from "@/components/column-filter"
import { Button } from "@/components/ui/button"
import { columns } from "@/components/transactions/columns"
import { DataTable } from "@/components/transactions/data-table"
import { ColumnVisibility } from "@/components/column-visibility"
import { TablePagination } from "@/components/transactions/table-pagination"

export function TransactionsPage() {
  // transaction hook
  const { transactions } = useTransaction()
  // react table
  const table = useReactTable({
    data: transactions!,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  })

  return (
    <div className="w-full my-5 px-5 space-y-5">
      <h1 className="font-bold text-2xl">Transactions</h1>
      <div className="w-full flex items-center">
        <ColumnFilter column="name" table={table} />
        <div className="ml-auto space-x-3">
          <Button>New transactions</Button>
          <ColumnVisibility table={table} />
        </div>
      </div>
      <DataTable data={transactions} />
      <div>
        <TablePagination />
      </div>
    </div>
  )
}
