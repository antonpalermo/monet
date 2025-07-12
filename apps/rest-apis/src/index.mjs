import debug from "debug"
import createApp from "./app.mjs"

const logger = debug("rest:app")

const app = createApp()
const port = process.env.PORT

app.listen(port, () => {
  logger(`express server listening for request on http://localhost:${port}`)
})
