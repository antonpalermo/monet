import { useState, type ReactNode } from "react"
import { TransactionContext } from "./transaction-context"

export type TransactionProviderProps = {
  children: ReactNode
}

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [open, setOpen] = useState(false)

  return (
    <TransactionContext
      value={{
        modal: {
          open,
          onOpenChange: setOpen
        }
      }}
    >
      {children}
    </TransactionContext>
  )
}
