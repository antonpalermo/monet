import z from "zod"

import { useEffect, useState, type ReactNode } from "react"
import {
  LEDGER_FORM_SCHEMA,
  LedgerContext,
  type Ledger
} from "@/contexts/ledger-context"

export type LedgerProviderProps = {
  children: ReactNode
}

export function LedgerProvider({ children }: LedgerProviderProps) {
  const [open, setOpen] = useState(false)
  const [ledgers, setLedgers] = useState<{ default?: Ledger; data: Ledger[] }>({
    data: []
  })

  async function handleSubmit(data: z.infer<typeof LEDGER_FORM_SCHEMA>) {
    console.log(data)
    setOpen(false)
  }

  async function getLedgers() {
    try {
      const request = await fetch("/api/ledger")
      setLedgers(await request.json())
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getLedgers()
  }, [])

  const defaultValues = {
    ledgers,
    modal: {
      open,
      onOpenChange: setOpen
    },
    handleSubmit
  }

  return (
    <LedgerContext.Provider value={defaultValues}>
      {children}
    </LedgerContext.Provider>
  )
}
