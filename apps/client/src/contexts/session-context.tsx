import { createContext } from "react"

export type User = {
  id: string
  name: string
  email: string
  image: string
  dateCreated: Date
  dateUpdated: Date
}

type SessionContextProps = {
  user: User | undefined
  isAuthenticated: boolean
  isLoading: boolean
  signOut: () => void
}

export const SessionContext = createContext<SessionContextProps | undefined>(
  undefined
)
