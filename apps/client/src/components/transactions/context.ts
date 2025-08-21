import { createContext } from "react"
import z from "zod"

export const TRANSACTION_FORM_SCHEMA = z.object({
  name: z.string().min(3)
})

export type Transaction = z.infer<typeof TRANSACTION_FORM_SCHEMA> & {}

export type TransactionContextProps = {
  modal: {
    open: boolean
    onOpenChange: (open: boolean) => void
  }
  createTransaction: (
    data: z.infer<typeof TRANSACTION_FORM_SCHEMA>
  ) => Promise<void>
}

export const TransactionContext = createContext<
  TransactionContextProps | undefined
>(undefined)
