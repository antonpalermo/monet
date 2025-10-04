import {
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable
} from "@tanstack/react-table"

import { useTransaction } from "@/hooks/use-transaction"

import { Button } from "@/components/ui/button"
import { columns } from "@/components/transactions/table-columns"
import { ColumnFilter } from "@/components/column-filter"
import { ColumnVisibility } from "@/components/column-visibility"
import { TransactionTable } from "./table"

export function TransactionsPage() {
  // transaction hook
  const { transactions } = useTransaction()
  // react table
  const table = useReactTable({
    data: transactions!,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel()
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
      <TransactionTable table={table} />
    </div>
  )
}
