export async function switchLedgerFn(id: string) {
  try {
    const request = await fetch("/api/metadata/properties", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ledger: id })
    })
    return await request.json()
  } catch (error) {
    // TODO: find a way to correctly handle error.
    console.log(error)
  }
}
