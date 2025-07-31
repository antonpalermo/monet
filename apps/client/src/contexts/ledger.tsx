import z from "zod"

import { useState, type ReactNode } from "react"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

import { LedgerContext, LEDGER_FORM_SCHEMA } from "@/contexts/ledger-context"

export type LedgerProviderProps = {
  children: ReactNode
}

export function LedgerProvider({ children }: LedgerProviderProps) {
  const [open, setOpen] = useState(false)

  const queryClient = useQueryClient()
  const { data, isLoading } = useQuery({
    queryKey: ["ledgers"],
    queryFn: fetchLedgers
  })
  const ledgerMutation = useMutation({
    mutationFn: createLedger,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ledgers"] })
      setOpen(false)
    }
  })

  async function createLedger(data: z.infer<typeof LEDGER_FORM_SCHEMA>) {
    try {
      const request = await fetch("/api/ledger/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })

      return await request.json()
    } catch (error) {
      console.log(error)
    }
  }

  async function fetchLedgers() {
    try {
      const request = await fetch("/api/ledger")
      return await request.json()
    } catch (error) {
      console.log(error)
    }
  }

  async function handleSubmit(data: z.infer<typeof LEDGER_FORM_SCHEMA>) {
    ledgerMutation.mutate(data)
  }

  return (
    <LedgerContext.Provider
      value={{
        isLoading,
        ledgers: data,
        modal: {
          open,
          onOpenChange: setOpen
        },
        handleSubmit
      }}
    >
      {children}
    </LedgerContext.Provider>
  )
}
