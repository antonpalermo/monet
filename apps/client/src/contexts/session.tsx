import { useEffect, useState, type ReactNode } from "react"
import { SessionContext, type User } from "./session-context"

export type SessionProviderProps = {
  children: ReactNode
}

export function SessionProvider({ children }: SessionProviderProps) {
  const [user, setUser] = useState<User | undefined>(undefined)
  const [loading, setLoading] = useState<boolean>(true)

  async function checkStatus() {
    try {
      const res = await fetch("/api/auth/status")

      if (res.ok) {
        const data: User = await res.json()
        setUser(data)
      } else if (res.status === 401) {
        setUser(undefined)
      } else {
        console.log("Failed to fetch auth status: ", res.statusText)
      }
    } catch (error) {
      console.log("unable to fetch user status", error)
      setUser(undefined)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    checkStatus()
  }, [])

  return (
    <SessionContext.Provider
      value={{ isAuthenticated: !!user, isLoading: loading, user, checkStatus }}
    >
      {children}
    </SessionContext.Provider>
  )
}
