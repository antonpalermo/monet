import { ReactNode, useEffect, useState } from "react"
import { TransactionContext } from "../../libs/transcation-context"

export type TransactionProviderProps = {
  children: ReactNode
}

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState([])

  async function getTransactions() {
    try {
      const request = await fetch("/api/transactions")
      const data = await request.json()

      setTransactions(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getTransactions()
  }, [])

  return (
    <TransactionContext.Provider value={{ transactions }}>
      {children}
    </TransactionContext.Provider>
  )
}
