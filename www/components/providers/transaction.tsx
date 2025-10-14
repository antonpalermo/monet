import { type ReactNode } from "react"
import { useQuery } from "@tanstack/react-query"

import { TransactionContext } from "@/contexts"
import { getTransacations } from "@/lib/api"
import type { Transaction } from "@/lib/schemas/transaction"

export type TransactionProviderProps = {
  children: ReactNode
}

export type TransactionQueryResponse = {
  data: Transaction[]
  message: string
}

export function TransactionProvider({ children }: TransactionProviderProps) {
  const { data, isLoading } = useQuery<TransactionQueryResponse>({
    queryKey: ["get-transactions"],
    queryFn: getTransacations,
    staleTime: Infinity
  })

  if (isLoading) {
    return null
  }

  return (
    <TransactionContext.Provider value={{ transactions: data!.data }}>
      {children}
    </TransactionContext.Provider>
  )
}
