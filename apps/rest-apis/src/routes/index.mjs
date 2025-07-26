import debug from "debug"
import express from "express"

import authRoutes from "./auth.mjs"
import ledgerRoutes from "./ledger.mjs"
import transactionRoutes from "./transactions.mjs"

const logger = debug("rest:app")
const routes = express.Router({ strict: true })

routes.use("/auth", authRoutes)
routes.use("/ledger", ledgerRoutes)
routes.use("/transactions", transactionRoutes)

routes.use((err, request, response, next) => {
  logger(`${request.path} encountered an error`)
  return response.status(500)
})

export default routes
