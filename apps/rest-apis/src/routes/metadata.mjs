import express from "express"
import { updateMetadata } from "../handlers/metadata.mjs"

const routes = express.Router({ strict: true })

routes.patch("/properties/:id", updateMetadata)

export default routes
