import debug from "debug"
import createApp from "./app.mjs"

import mongoose from "mongoose"

const logger = debug("rest:app")
const dbLogger = debug("rest:database")

const app = createApp()
const port = process.env.PORT

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => dbLogger("connected"))
  .catch(() => dbLogger("unable to connect, please check database connections"))

app.listen(port, () => {
  logger(`express server listening for request on http://localhost:${port}`)
})
