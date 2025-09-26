import { hc } from "hono/client"
import { type BackendTypes } from "@server/index"

const client = hc<BackendTypes>("/")

export const api = client.api

export async function getTransacations() {
  try {
    const req = await api.transactions.$get()
    return await req.json()
  } catch (error) {
    throw new Error("unable to get all transactions", { cause: error })
  }
}
