import debug from "debug"
import express from "express"
import passport from "passport"

const logger = debug("rest:transaction")
const routes = express.Router({ strict: true })

routes.get("/signin/google", passport.authenticate("google"))

routes.get(
  "/oauth2/redirect/google",
  passport.authenticate("google", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: `${process.env.CLIENT_URL}/auth/signin?status=error`
  })
)

routes.get("/status", (req, res) => {
  return req.user ? res.send(req.user) : res.sendStatus(401)
})

export default routes
