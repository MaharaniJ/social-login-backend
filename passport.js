const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

require("dotenv").config();
GOOGLE_CLIENT_ID =
  "699812083032-m1m692lkpg6tmud6oesl6tauga9bcodu.apps.googleusercontent.com";
GOOGLE_CLIENT_SECRET = "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";

GITHUB_CLIENT_ID = "d91463497f26d8dfad7d";
GITHUB_CLIENT_SECRET = "fcfdafe396a4519de07f3dd8a8cdef785d7a87d8";

FACEBOOK_APP_ID = "642366303895874";
FACEBOOK_APP_SECRET = "035a53c18c542dc139241aea25d347df";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
