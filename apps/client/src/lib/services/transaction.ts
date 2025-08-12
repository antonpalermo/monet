import z from "zod"

import type { TRANSACTION_FORM_SCHEMA } from "@/contexts/transaction-context"

export async function createTransactionMutationFn(payload: {
  ledger: string | undefined
  data: z.infer<typeof TRANSACTION_FORM_SCHEMA>
}) {
  try {
    const request = await fetch("/api/transactions/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ledger: payload.ledger, data: payload.data })
    })

    return await request.json()
  } catch (error) {
    // TODO: find a way to correctly handle error.
    console.log(error)
  }
}
