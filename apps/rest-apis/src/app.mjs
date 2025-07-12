import express from "express"
import routes from "./routes/index.mjs"

export default function createApp() {
  const app = express()

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  app.use("/api", routes)

  return app
}
