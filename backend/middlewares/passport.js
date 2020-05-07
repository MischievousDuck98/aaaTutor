const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local');
const User = require('../models/User');

const localOptions = {
  usernameField: 'email',
};

const localLogin = new LocalStrategy(localOptions, ((email, password, done) => {
  const trimmedEmail = email.replace(/[\\$'"]/g, '\\$&');
  const trimmedPassword = password.replace(/[\\$'"]/g, '\\$&');

  User.findOne({ email: trimmedEmail }, (err, user) => {
    if (err) {
      return done(null, false, { message: 'Unknown error.' });
    }
    if (!user) {
      return done(null, false, { message: 'User not found.' });
    }

    return user.comparePassword(trimmedPassword, (compareErr, isMatch) => {
      if (compareErr) {
        return done(null, false, { message: 'Unknown error.' });
      }
      if (!isMatch) {
        return done(null, false, { message: 'Incorrect password.' });
      }

      return done(null, user);
    });
  }).select('+password');
}));

const jwtLogin = new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.HASH_SECRET,
}, ((payload, done) => {
  User.findById(payload.sub, (err, user) => {
    if (err) {
      return done(err, false);
    }
    if (user) {
      return done(null, user);
    }
    return done(null, false, { message: 'Error.' });
  });
}));

passport.use(jwtLogin);
passport.use(localLogin);

module.exports = {
  passport,
  requireAuth: passport.authenticate('jwt', { session: false }),
};
