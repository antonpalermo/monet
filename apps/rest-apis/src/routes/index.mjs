import express from "express"

import authRoutes from "./auth.mjs"
import ledgerRoutes from "./ledger.mjs"
import transactionRoutes from "./transactions.mjs"

const routes = express.Router({ strict: true })

routes.use("/auth", authRoutes)
routes.use("/ledger", ledgerRoutes)
routes.use("/transactions", transactionRoutes)

export default routes
