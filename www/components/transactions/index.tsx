import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel
} from "@tanstack/react-table"

import { useTransaction } from "@/hooks/use-transaction"
import { TransactionTable } from "@/components/transactions/table"
import { ColumnFilter } from "@/components/column-filter"
import { Button } from "@/components/ui/button"
import { ColumnVisibility } from "@/components/column-visibility"

export function TransactionsPage() {
  const transaction = useTransaction()
  const table = useReactTable({
    data: transaction.data,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel()
  })

  return (
    <div className="px-5 space-y-3 pb-5">
      <h1 className="font-bold text-2xl">Ledger Transactions</h1>
      <div className="flex items-center py-4">
        <ColumnFilter table={table} column="name" />
        <div className="ml-auto space-x-3">
          <Button>New Transaction</Button>
          <ColumnVisibility table={table} />
        </div>
      </div>
      <TransactionTable data={transaction.data} />
    </div>
  )
}
