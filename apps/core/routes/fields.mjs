import express from "express"
import { Field } from "../models/field.mjs"

const router = express.Router({ strict: true })

router.get("/", async (request, response, next) => {
  try {
    const result = await Field.find()
    return response.status(200).json(result)
  } catch (error) {
    next(error)
  }
})

export default router
