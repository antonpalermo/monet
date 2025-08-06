import express from "express"
import passport from "passport"

const routes = express.Router({ strict: true })

routes.get(
  "/oauth2/google",
  passport.authenticate("google", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: `${process.env.CLIENT_URL}/auth/signin?status=error`
  })
)

export default routes
