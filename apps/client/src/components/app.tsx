import { useEffect, useState } from "react"

export default function App() {
  const [response, setResponse] = useState({})

  useEffect(() => {
    fetch("/api")
      .then(res => res.json())
      .then(data => setResponse(data))
      .catch(e => console.log("error: ", e))
  }, [])

  return <div>{JSON.stringify(response)}</div>
}
