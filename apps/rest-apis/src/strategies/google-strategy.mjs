import passport from "passport"
import { Strategy as GoogleStrategy } from "passport-google-oidc"

async function verify(issuer, profile, cb) {}

export default passport.use(
  new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/oauth2/redirect/google",
    scope: ["profile"]
  }),
  verify
)
