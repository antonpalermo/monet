import { useContext } from "react"
import { TransactionContext } from "../libs/transcation-context"

export function useTransactions() {
  const context = useContext(TransactionContext)

  if (typeof context !== "undefined") {
    throw new Error(
      "useTransaction hook must be used inside TransactionProvider component"
    )
  }

  return context
}
