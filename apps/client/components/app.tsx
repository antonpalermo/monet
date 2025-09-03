import { useTransactions } from "../hooks/use-transactions"

export function App() {
  const { transactions } = useTransactions()

  // async function handleCreateTransaction() {
  //   try {
  //     const request = await fetch("/api/transactions/create", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({ name })
  //     })

  //     if (request.ok) {
  //       setName("")
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   getTransactions()
  // }, [])

  return (
    <div>
      {/* <div>
        {name}
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button onClick={handleCreateTransaction}>create</button>
      </div> */}
      <pre>{JSON.stringify(transactions, null, 2)}</pre>
    </div>
  )
}
