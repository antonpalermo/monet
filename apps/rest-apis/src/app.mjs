import { fileURLToPath } from "node:url"

import path from "node:path"
import express from "express"
import session from "express-session"
import cookieParser from "cookie-parser"

import routes from "./routes/index.mjs"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default function createApp() {
  const app = express()

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(cookieParser(process.env.COOKIE_SECRET))

  app.use("/public", express.static(path.join(__dirname, "../public")))
  app.use("/api", routes)
  app.use(
    session({
      secret: process.env.COOKIE_SECRET,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24
      }
    })
  )

  return app
}
