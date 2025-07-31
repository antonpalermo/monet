import { useContext } from "react"
import { LedgerContext } from "@/contexts/ledger-context"

export function useLedger() {
  const context = useContext(LedgerContext)

  if (typeof context === "undefined") {
    throw new Error("useLedger must be use inside LedgerProvider")
  }

  return context
}
