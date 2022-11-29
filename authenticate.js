var passport = require('passport');
const models = require('./models');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens

var config = require('./config.js');

passport.use(models.User.createStrategy());
passport.serializeUser(models.User.serializeUser());
passport.deserializeUser(models.User.deserializeUser());

exports.getToken = (user) => {
    return jwt.sign(user, config.secretKey, {expiresIn: 3600});
};

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secretKey;

exports.jwtPassport = passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    models.User.findOne({
        where: {
            username: jwt_payload.username
        }
    }).then(user => {
        if (user) {
            return done(null, user);
        }
        else {
            return done(null, false);
        }
    });
}));

exports.verifyUser = passport.authenticate('jwt', {session: false});

exports.verifyAdmin = (req, res, next) => {
    if(req.user.dataValues.admin)
        next();
    else {
        res.statusCode = 403;
        res.end("You are not authorized to perform this operation!");
    }
};