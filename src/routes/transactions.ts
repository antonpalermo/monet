import { Hono } from "hono"

import { createTransaction, getTransactions } from "../handlers/transactions"

const route = new Hono<{ Bindings: CloudflareBindings }>()

route.get('/', getTransactions)
route.post("/create", createTransaction)

export default route
