import express from "express"
import passport from "passport"

import { getStatus, signOut } from "../handlers/auth.mjs"

const routes = express.Router({ strict: true })

/**
 * authenticate user using google provider
 */
routes.get("/signin/google", passport.authenticate("google"))

/**
 * get currently authenticated user details
 */
routes.get("/status", getStatus)

/**
 * sinout currently authenticated user
 */
routes.post("/signout", signOut)

export default routes
