import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

import User from './models/User';

const authenticateUser = async (username: string, password: string, done: any) => {
  User.findOne({ username })
    .then(user => {
      if (!user) {
        return done(null, false);
      }

      user.comparePasswords(password)
        .then(isMatch => {
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        })
        .catch(err => done(err));
    })
    .catch(err => done(err));
};

passport.use(new LocalStrategy(authenticateUser));

passport.serializeUser((user: any, done) => {
  if (!user)
    return done(null, false);
  done(null, user.id);
});

passport.deserializeUser((id: string, done) => {
  if (!id)
    return done(null, false);
  User.findById(id)
    .then(user => done(null, user))
    .catch(err => done(err));
}
);

export default passport;