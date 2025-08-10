import express from "express"
import debug from "debug"

import { Transactions } from "../models/transaction.mjs"
import { createTransaction } from "../handlers/transaction.mjs"

const logger = debug("rest:transaction")
const routes = express.Router({ strict: true })

routes.get("/", async (req, res) => {
  try {
    const result = await Transactions.find()
    return res.status(200).json(result)
  } catch (error) {
    logger("unable to get all transaction.")
  }
})

routes.post("/create", createTransaction)

export default routes
