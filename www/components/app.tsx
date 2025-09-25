import { useQuery } from "@tanstack/react-query"
import { Button } from "@/components/ui/button"

import { api } from "@/lib/api"

export function App() {
  const getTransaction = async () => {
    const req = await api.transactions.$get()
    if (!req.ok) {
      throw new Error("unable to get all transactions")
    }
    return await req.json()
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
      <Button>Sample</Button>
      <pre>{JSON.stringify(transactions, null, 2)}</pre>
    </div>
  )
}
