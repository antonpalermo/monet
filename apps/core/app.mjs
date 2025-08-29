import path from "node:path"
import url from "node:url"

import express from "express"
import cors from 'cors'
import cookieParser from "cookie-parser"
import logger from "morgan"

import indexRouter from "./routes/index.mjs"
import database from "./database.mjs"

const app = express()

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

database.connect()

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

app.use("/api", indexRouter)

export default app
