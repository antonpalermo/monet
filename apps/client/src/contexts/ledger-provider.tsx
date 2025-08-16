import z from "zod"

import { useState, type ReactNode } from "react"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

import { LedgerContext, LEDGER_FORM_SCHEMA } from "@/contexts/ledger-context"
import { createLedgerFn, switchLedgerFn } from "@/lib/services/ledger"

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
  const createLedgerMutation = useMutation({
    mutationFn: createLedgerFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ledgers"] })
      setOpen(false)
    }
  })
  const switchLedgerMutation = useMutation({
    mutationFn: switchLedgerFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ledgers"] })
    }
  })

  async function fetchLedgers() {
    try {
      const request = await fetch("/api/ledger")
      return await request.json()
    } catch (error) {
      console.log(error)
    }
  }

  async function switchLedger(id: string) {
    switchLedgerMutation.mutate(id)
  }

  async function createLedger(data: z.infer<typeof LEDGER_FORM_SCHEMA>) {
    createLedgerMutation.mutate(data)
  }

  if (isLoading) {
    return null
  }

  return (
    <LedgerContext.Provider
      value={{
        current: data.default,
        isLoading,
        ledgers: data,
        modal: {
          open,
          onOpenChange: setOpen
        },
        switchLedger,
        createLedger
      }}
    >
      {children}
    </LedgerContext.Provider>
  )
}
