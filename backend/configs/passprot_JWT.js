const configs = require('../configs/config');
const User = require('../models/user_model');
const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = configs.SECRET_KEY;
passport.use(new JwtStrategy(opts, async function(jwt_payload, done) {

    try {
        const user = await User.findById(jwt_payload.id);
        if (user) {
            return done(null, user)
        } else {
            return done(new Error('ไม่พบผู้ใช้งานในระบบ'), null)
        }
    } catch (error) {
        done(error)
    }

}));

module.exports.isLogin = passport.authenticate('jwt', { session: false });