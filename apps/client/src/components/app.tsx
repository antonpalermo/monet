import { useEffect, useState } from "react"
import { Outlet } from "react-router"

export default function App() {
  const [response, setResponse] = useState({})

  useEffect(() => {
    fetch("/api/transactions")
      .then(res => res.json())
      .then(data => setResponse(data))
      .catch(e => console.log("error: ", e))
  }, [])

  return (
    <div>
      <pre>{JSON.stringify(response, null, 2)}</pre>
      <Outlet />
    </div>
  )
}
