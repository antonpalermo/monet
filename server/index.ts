import { Hono } from "hono"
import { logger } from "hono/logger"
import { secureHeaders } from "hono/secure-headers"

import transactionsRoute from "./routes/transactions"

const app = new Hono<{ Bindings: CloudflareBindings }>()
  .basePath("/api")
  .route("/transactions", transactionsRoute)

app.use(logger())
app.use(secureHeaders())

export type BackendTypes = typeof app
export default {
  fetch: app.fetch
}
