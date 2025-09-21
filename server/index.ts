import { Hono } from "hono"
import { logger } from "hono/logger"
import { secureHeaders } from "hono/secure-headers"

import transactionsRoute from "./routes/transactions"

const app = new Hono<{ Bindings: CloudflareBindings }>().basePath("/api")

app.use(logger())
app.use(secureHeaders())

app.route("/transactions", transactionsRoute)

export default {
  fetch: app.fetch
}
