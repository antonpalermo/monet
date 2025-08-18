import type z from "zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useState, type ReactNode } from "react"

import {
  TransactionContext,
  TRANSACTION_FORM_SCHEMA
} from "@/contexts/transaction-context"
import { useLedger } from "@/hooks/use-ledger"
import { createTransactionMutationFn } from "@/lib/services/transaction"

export type TransactionProviderProps = {
  children: ReactNode
}

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [open, setOpen] = useState(false)

  const { current } = useLedger()
  const { invalidateQueries } = useQueryClient()

  const createTransactionMutation = useMutation({
    mutationFn: createTransactionMutationFn,
    onSuccess: () => {
      // invalidate query
      invalidateQueries({ queryKey: [""] })
      setOpen(false)
    }
  })

  async function createTransaction(
    data: z.infer<typeof TRANSACTION_FORM_SCHEMA>
  ) {
    createTransactionMutation.mutate({ ledger: current?.id, data })
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
