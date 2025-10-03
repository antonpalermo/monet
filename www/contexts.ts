import { createContext } from "react"

import { type Transaction } from "@/lib/schemas/transaction"

export type TransactionContextType = {
  data: Transaction[]
}

export const TransactionContext = createContext<TransactionContextType | null>(
  null
)
