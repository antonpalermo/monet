import path from "node:path"
import express from "express"

import routes from "./routes/index.mjs"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default function createApp() {
  const app = express()

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  app.use("/public", express.static(path.join(__dirname, "../public")))
  app.use("/api", routes)

  return app
}
