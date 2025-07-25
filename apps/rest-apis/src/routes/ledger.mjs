import express from "express"
import { createLedger } from "../handlers/ledger.mjs"

const routes = express.Router({ strict: true })

routes.post("/create", createLedger)

export default routes
