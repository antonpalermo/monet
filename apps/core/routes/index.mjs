import express from "express"

import transactionsRouter from "./transactions.mjs"

const router = express.Router({ strict: true })

router.use("/transactions", transactionsRouter)

export default router
