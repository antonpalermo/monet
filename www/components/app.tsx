import { useEffect, useState } from "react"

export function App() {
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    async function getTransaction() {
      const request = await fetch("/api/transactions")
      if (request.ok) {
        setTransactions(await request.json())
      }
    }

    getTransaction()
  }, [])

  return (
    <div>
      <h1 className="text-blue-500">Transactions</h1>
      <pre>{JSON.stringify(transactions, null, 2)}</pre>
    </div>
  )
}
