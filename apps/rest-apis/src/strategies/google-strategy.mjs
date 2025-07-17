import passport from "passport"
import { Strategy as GoogleStrategy } from "passport-google-oidc"

passport.serializeUser((user, done) => {
  console.log(user)
  return done(null, "1")
})

passport.deserializeUser((id, done) => {
  console.log("id: ", id)
  return done(null, { user: "ok" })
})

export default passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/oauth2/redirect/google",
      scope: ["profile"]
    },
    async function verify(profile, issuer, cb) {
      console.log("profile: ", profile, "issuer: ", issuer)
      return cb(null, { msg: "ok" })
    }
  )
)
