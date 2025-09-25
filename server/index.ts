import { Hono } from "hono"
import { logger } from "hono/logger"
import { secureHeaders } from "hono/secure-headers"

import transactionsRoute from "./routes/transactions"

const app = new Hono<{ Bindings: CloudflareBindings }>()

app.use(logger())
app.use(secureHeaders())

const appRoutes = app.basePath("/api").route("/transactions", transactionsRoute)

export type BackendTypes = typeof appRoutes
export default {
  fetch: app.fetch
}
