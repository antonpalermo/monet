import { type ReactNode } from "react"
import { useQuery } from "@tanstack/react-query"

import { SessionContext } from "@/contexts/session-context"

export type SessionProviderProps = {
  children: ReactNode
}

export function SessionProvider({ children }: SessionProviderProps) {
  const { data: user, isLoading } = useQuery({
    queryKey: ["session"],
    queryFn: fetchSession
  })

  async function fetchSession() {
    console.log("fetchSession fired!")
    try {
      const request = await fetch("/api/auth/status")

      if (request.status === 401) {
        throw new Error("User unauthenticated" + request.statusText)
      }

      return await request.json()
    } catch (error) {
      console.log(error)
    }
  }

  async function signOut() {
    try {
      const request = await fetch("/api/auth/signout", { method: "POST" })
      if (request.redirected) {
        window.location.replace(request.url)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SessionContext.Provider
      value={{ isAuthenticated: !!user, isLoading, user, signOut }}
    >
      {children}
    </SessionContext.Provider>
  )
}
