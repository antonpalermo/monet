import express from "express"
import { createLedger, getLedgers } from "../handlers/ledger.mjs"

const routes = express.Router({ strict: true })

routes.get("/", getLedgers)
routes.post("/create", createLedger)

export default routes
