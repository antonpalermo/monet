import express from "express"

import fieldRouter from "./fields.mjs"
import transactionsRouter from "./transactions.mjs"

const router = express.Router({ strict: true })

router.use("/fields", fieldRouter)
router.use("/transactions", transactionsRouter)

export default router
