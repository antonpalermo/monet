import { useTransaction } from "@/hooks/use-transaction"

export function TransactionsPage() {
  const transaction = useTransaction()

  return (
    <div>
      <h1>Ledger Transactions</h1>
      <pre>{JSON.stringify(transaction.data, null, 2)}</pre>
    </div>
  )
}
