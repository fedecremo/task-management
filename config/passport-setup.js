const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user-model');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

//set up the strategy
passport.use(
  new GoogleStrategy({
    //options for our GoogleStrategy
    callbackURL :'/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
  }, (accessToken, refreshToken, profile, done) => {
    //check if user already exissts in my db
    User.findOne({googleId: profile.id}).then((currentUser) => {
      if(currentUser){
        // already have this user
        console.log('user is: '+ currentUser);
        done(null, currentUser);
      } else {
        //not already exists, create new user
        new User({
          username: profile.displayName,
          googleId: profile.id,
          thumbnail: profile._json.image.url
        }).save().then((newUser) => {
          console.log('new user created: ' + newUser);
          done(null, newUser);
        });
      }
    })

  })
)
