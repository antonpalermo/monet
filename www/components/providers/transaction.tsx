import type { ReactNode } from "react"
import { useQuery } from "@tanstack/react-query"

import { TransactionContext } from "@/contexts"
import { getTransacations } from "@/lib/api"

export type TransactionProviderProps = {
  children: ReactNode
}

export function TransactionProvider({ children }: TransactionProviderProps) {
  const { data: transactions } = useQuery({
    queryKey: ["get-transactions"],
    queryFn: getTransacations
  })

  return (
    <TransactionContext.Provider value={{ data: transactions?.data }}>
      {children}
    </TransactionContext.Provider>
  )
}
