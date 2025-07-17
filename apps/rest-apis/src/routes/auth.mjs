import debug from "debug"
import express from "express"
import passport from "passport"

const logger = debug("rest:transaction")
const routes = express.Router({ strict: true })

routes.get("/signin/google", passport.authenticate("google"))

routes.get(
  "/oauth2/redirect/google",
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/failed"
  })
)

export default routes
