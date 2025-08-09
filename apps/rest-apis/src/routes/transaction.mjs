import express from "express"
import transaction from "../models/transaction.mjs"
import debug from "debug"

const logger = debug("rest:transaction")
const routes = express.Router({ strict: true })

routes.get("/", async (req, res) => {
  try {
    const result = await transaction.find()
    return res.status(200).json(result)
  } catch (error) {
    logger("unable to get all transaction.")
  }
})

routes.post("/create", async (req, res) => {
  try {
    const result = await transaction.create({
      name: "sample"
    })

    return res.status(201).json(result)
  } catch (error) {
    logger("unable to create transaction.")
  }
})

export default routes
