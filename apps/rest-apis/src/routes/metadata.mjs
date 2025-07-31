import express from "express"
import { updateMetadata } from "../handlers/metadata.mjs"

const routes = express.Router({ strict: true })

routes.patch("/properties", updateMetadata)

export default routes
