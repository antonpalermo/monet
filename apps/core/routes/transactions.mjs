import debug from "debug"
import express from "express"
import { Transaction } from "../models/transactions.mjs"

const logger = debug("core:transactions")
const router = express.Router({ strict: true })

router.get("/", async (_, response) => {
  try {
    const transactions = await Transaction.find()
    return response.status(200).json(transactions)
  } catch (error) {
    logger("unable to get all transactions, please see error: ", error)
    next(error)
  }

  return response.status(200).json({ message: "no transactions" })
})

router.post("/create", async (request, response, next) => {
  const name = request.body.name

  try {
    const transaction = await Transaction.create({
      name
    })

    return response.status(201).json(transaction)
  } catch (error) {
    logger("unable to create new transaction, please see error: ", error)
    next(error)
  }
})

export default router
