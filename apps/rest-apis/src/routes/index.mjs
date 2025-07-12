import express from "express"
import transactionRoutes from "./transactions.mjs"

const routes = express.Router({ strict: true })

routes.use("/transactions", transactionRoutes)

export default routes
