import { useState, type ReactNode } from "react"
import { useQuery } from "@tanstack/react-query"

import { TransactionContext, type TransactionContextType } from "@/contexts"
import { getTransacations } from "@/lib/api"

export type TransactionProviderProps = {
  children: ReactNode
}

export function TransactionProvider({ children }: TransactionProviderProps) {
  const { data: transactions } = useQuery({
    queryKey: ["get-transactions"],
    queryFn: getTransacations
  })
  const [value, setValue] = useState<TransactionContextType>({
    data: transactions?.data
  })

  return (
    <TransactionContext.Provider value={value}>
      {children}
    </TransactionContext.Provider>
  )
}
