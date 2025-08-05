import { fileURLToPath } from "node:url"

import cors from "cors"
import cookieParser from "cookie-parser"
import debug from "debug"
import express from "express"
import path from "node:path"
import passport from "passport"
import session from "express-session"

import { RedisStore } from "connect-redis"
import { createClient } from "redis"

import routes from "./routes/index.mjs"

import "./strategies/google-strategy.mjs"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default function createApp() {
  const redisLogger = debug("rest:redis")

  const app = express()
  const redis = createClient({
    url: process.env.REDIS_URL
  })

  redis
    .connect()
    .then(() => redisLogger("connected"))
    .catch(() => redisLogger("unable to connect to redis"))

  const redisStore = new RedisStore({
    client: redis,
    prefix: "auth:"
  })

  app.use(
    cors({
      origin: process.env.CLIENT_URL
    })
  )
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(cookieParser(process.env.COOKIE_SECRET))

  app.use("/public", express.static(path.join(__dirname, "../public")))

  app.use(
    session({
      saveUninitialized: true,
      resave: false,
      secret: process.env.COOKIE_SECRET,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24
      },
      store: redisStore
    })
  )

  app.use(passport.initialize())
  app.use(passport.session())

  app.use("/api", routes)

  return app
}
