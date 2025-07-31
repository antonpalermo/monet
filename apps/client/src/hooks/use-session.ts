import { useContext } from "react"
import { SessionContext } from "../contexts/session-context"

export function useSession() {
  const context = useContext(SessionContext)

  if (typeof context === "undefined") {
    throw new Error("useSession must be use inside SessionProvider")
  }

  return context
}
