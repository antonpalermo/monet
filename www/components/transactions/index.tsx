import { useTransaction } from "@/hooks/use-transaction"

import { DataTable } from "@/components/transactions/data-table"

export function TransactionsPage() {
  // transaction hook
  const { transactions } = useTransaction()

  return (
    <div className="w-full my-5 px-5 space-y-5">
      <h1 className="font-bold text-2xl">Transactions</h1>
      <DataTable data={transactions} />
    </div>
  )
}
