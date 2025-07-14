import { useState, useEffect } from "react"

import TransactionModal from "./transaction-modal"

export default function Transactions() {
  const [response, setResponse] = useState({})

  useEffect(() => {
    fetch("/api/transactions")
      .then(res => res.json())
      .then(data => setResponse(data))
      .catch(e => console.log("error: ", e))
  }, [])

  return (
    <div className="px-5">
      <div className="w-full inline-flex items-center justify-between">
        <h2>Transactions</h2>
        <TransactionModal />
      </div>
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  )
}
