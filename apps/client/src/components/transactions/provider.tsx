import type z from "zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useState, type ReactNode } from "react"

import {
  TransactionContext,
  TRANSACTION_FORM_SCHEMA
} from "@/components/transactions/context"
import { createTransactionMutationFn } from "@/lib/services/transaction"

export type TransactionProviderProps = {
  children: ReactNode
}

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [open, setOpen] = useState(false)

  const { invalidateQueries } = useQueryClient()

  const createTransactionMutation = useMutation({
    mutationFn: createTransactionMutationFn,
    onSuccess: () => {
      invalidateQueries({ queryKey: [""] })
      setOpen(false)
    }
  })

  async function createTransaction(
    data: z.infer<typeof TRANSACTION_FORM_SCHEMA>
  ) {
    createTransactionMutation.mutate({ ledger: "", data })
  }

  return (
    <TransactionContext
      value={{
        modal: {
          open,
          onOpenChange: setOpen
        },
        createTransaction
      }}
    >
      {children}
    </TransactionContext>
  )
}
