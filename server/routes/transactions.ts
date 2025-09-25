import { Hono } from "hono"

import { createTransaction, getTransactions } from "../handlers/transactions"

const route = new Hono<{ Bindings: CloudflareBindings }>()
  .get("/", getTransactions)
  .post("/create", createTransaction)

export default route
