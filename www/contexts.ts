import { createContext } from "react"

import { type Transaction } from "@/lib/schemas/transaction"

export type TransactionContextType = {
  transactions: Transaction[]
}

export const TransactionContext = createContext<TransactionContextType>({
  transactions: []
})
