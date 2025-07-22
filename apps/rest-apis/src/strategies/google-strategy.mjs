import mongoose from "mongoose"

import passport from "passport"
import { Strategy as GoogleStrategy } from "passport-google-oauth20"

import User from "../models/user.mjs"
import Account from "../models/account.mjs"

passport.serializeUser((user, done) => {
  return done(null, user)
})

passport.deserializeUser(async (id, done) => {
  const user = await User.findOne({
    _id: new mongoose.Types.ObjectId(`${id}`)
  }).select("-accounts")

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
    async function verify(accessToken, refreshToken, profile, done) {
      const userProfile = profile._json

      const account = await Account.findOneAndUpdate(
        { "provider.id": profile.id },
        {
          verified: userProfile.email_verified,
          provider: {
            id: profile.id,
            accessToken,
            refreshToken,
            name: "google",
            type: "oauth"
          },
          scope: ["profile", "email"]
        },
        { new: true, upsert: true }
      )

      const user = await User.findOneAndUpdate(
        {
          email: userProfile.email
        },
        {
          name: userProfile.name,
          image: userProfile.picture,
          accounts: [account._id]
        },
        {
          new: true,
          upsert: true
        }
      )

      return done(null, user.id)
    }
  )
)
