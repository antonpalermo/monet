import z from "zod"

import { createContext } from "react"

export const LEDGER_FORM_SCHEMA = z.object({
  name: z.string().min(3)
})

export type Ledger = z.infer<typeof LEDGER_FORM_SCHEMA> & {
  id: string
  owner: string
  dateCreated: Date
  dateUpdated: Date
}

export type LedgerContextProps = {
  current?: Ledger
  ledgers: {
    default?: Ledger
    data: Ledger[]
  }
  modal: {
    open: boolean
    onOpenChange: (open: boolean) => void
  }
  isLoading: boolean
  switchLedger: (id: string) => Promise<void>
  createLedger: (data: z.infer<typeof LEDGER_FORM_SCHEMA>) => Promise<void>
}

export const LedgerContext = createContext<LedgerContextProps | undefined>(
  undefined
)
