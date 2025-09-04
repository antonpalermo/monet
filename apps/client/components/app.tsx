import { useTransactions } from "../hooks/use-transactions"

export function App() {
  const { transactions } = useTransactions()


  return (
    <div>
      <pre>{JSON.stringify(transactions, null, 2)}</pre>
    </div>
  )
}
