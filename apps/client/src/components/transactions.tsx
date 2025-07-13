import { useState, useEffect } from "react"

export default function Transactions() {
  const [response, setResponse] = useState({})

  useEffect(() => {
    fetch("/api/transactions")
      .then(res => res.json())
      .then(data => setResponse(data))
      .catch(e => console.log("error: ", e))
  }, [])

  return (
    <div>
      <h2>Transactions</h2>
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  )
}
