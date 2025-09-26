import { useTransaction } from "@/hooks/use-transaction"
import { TransactionTable } from "./table"

export function TransactionsPage() {
  const transaction = useTransaction()

  if (!transaction.data) {
    return null
  }

  return (
    <div className="px-5 space-y-5">
      <h1 className="font-bold text-2xl">Ledger Transactions</h1>
      <TransactionTable data={transaction.data} />
    </div>
  )
}
