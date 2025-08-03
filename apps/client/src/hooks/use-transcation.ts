import { useContext } from "react"
import { TransactionContext } from "@/contexts/transaction-context"

export function useSession() {
  const context = useContext(TransactionContext)

  if (typeof context === "undefined") {
    throw new Error("useSession must be use inside SessionProvider")
  }

  return context
}
