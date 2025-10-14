import { hc } from "hono/client"
import { type BackendTypes } from "@server/index"

const client = hc<BackendTypes>("/")

export const api = client.api

export async function getTransacations() {
  const request = await api.transactions.$get()

  if (!request.ok) {
    throw new Error("unable to fetch all transactions")
  }

  return await request.json()
}
