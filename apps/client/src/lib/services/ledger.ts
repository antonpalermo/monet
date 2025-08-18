import z from "zod"

import { LEDGER_FORM_SCHEMA } from "@/contexts/ledger-context"

export async function getLedgersFn() {
  try {
    const request = await fetch("/api/ledger")
    return await request.json()
  } catch (error) {
    // TODO: find a way to correctly handle error.
    console.log(error)
  }
}

export async function createLedgerFn(data: z.infer<typeof LEDGER_FORM_SCHEMA>) {
  try {
    const request = await fetch("/api/ledger/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })

    return await request.json()
  } catch (error) {
    // TODO: find a way to correctly handle error.
    console.log(error)
  }
}

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
