import { useQuery } from "@tanstack/react-query"

export function App() {
  const getTransaction = async () => {
    const request = await fetch("/api/transactions")
    if (!request.ok) {
      throw new Error("unable to get all transactions")
    }
    return await request.json()
  }

  const { data: transactions, isLoading } = useQuery({
    queryKey: ["get-transaction"],
    queryFn: getTransaction,
    staleTime: Infinity
  })

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h1 className="text-blue-500">Transactions</h1>
      <pre>{JSON.stringify(transactions, null, 2)}</pre>
    </div>
  )
}
