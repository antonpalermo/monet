import debug from "debug"
import express from "express"

import authRoutes from "./auth.mjs"
import ledgerRoutes from "./ledger.mjs"
import callbackRoutes from "./callback.mjs"
import metadataRoutes from "../routes/metadata.mjs"
import transactionRoutes from "./transaction.mjs"

const logger = debug("rest:app")
const routes = express.Router({ strict: true })

function requireAuth(request, response, next) {
  if (typeof request.user === "undefined") {
    return response.status(401)
  }

  next()
}

routes.use("/auth", authRoutes)
routes.use("/callback", callbackRoutes)

routes.use("/ledger", requireAuth, ledgerRoutes)
routes.use("/metadata", requireAuth, metadataRoutes)
routes.use("/transactions", transactionRoutes)

routes.use((err, request, response, next) => {
  logger(`${request.path} encountered an error`)
  return response.status(500)
})

export default routes
