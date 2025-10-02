import { Hono } from "hono"
import { logger } from "hono/logger"
import { secureHeaders } from "hono/secure-headers"

import transactionsRoute from "./routes/transactions"

const app = new Hono<{ Bindings: CloudflareBindings }>()

app.use(logger())
app.use(secureHeaders())

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routes = app.basePath("/api").route("/transactions", transactionsRoute)

export type BackendTypes = typeof routes
export default {
  fetch: app.fetch
}
