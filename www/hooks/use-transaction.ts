import { useContext } from "react"
import { TransactionContext } from "@/contexts"

export function useTransaction() {
  const context = useContext(TransactionContext)

  if (typeof context === "undefined") {
    throw new Error(
      "useTransaction must be used inside <TransactionProvider/> component"
    )
  }

  return context
}
