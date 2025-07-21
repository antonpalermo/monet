import mongoose from "mongoose"

import passport from "passport"
import { Strategy as GoogleStrategy } from "passport-google-oidc"

import User from "../models/user.mjs"
import Account from "../models/account.mjs"

passport.serializeUser((user, done) => {
  return done(null, user)
})

passport.deserializeUser(async (id, done) => {
  const user = await User.findOne({
    _id: new mongoose.Types.ObjectId(`${id}`)
  })

  return done(null, user.toJSON())
})

export default passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/oauth2/redirect/google",
      scope: ["profile", "email"]
    },
    async function verify(profile, issuer, cb) {
      const account = await Account.create({
        provider: {
          id: issuer.id,
          name: "google",
          type: "oauth"
        },
        scope: ["profile", "email"]
      })

      const user = await User.findOneAndUpdate(
        {
          email: issuer.emails[0].value
        },
        {
          name: issuer.displayName,
          accounts: [account._id]
        },
        {
          new: true,
          upsert: true
        }
      )

      return cb(null, user.id)
    }
  )
)
