const models = require('../models');
var passport = require('passport');
var authenticate = require('../authenticate');

const signupHandler = async (req, res, next) => {
  try {
    models.User.register(new models.User({username: req.body.username}), req.body.password, (err, user) => {
      if(err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.json({err: err});
      }
      else {
        passport.authenticate('local')(req, res, () => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({success: true, status: 'Registration Successful!'});
        });
      }
    });
  }
  catch(error) {
      next(error);
  }
}

const loginHandler = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err)
      return next(err);

    if (!user) {
      res.statusCode = 401;
      res.setHeader('Content-Type', 'application/json');
      res.json({success: false, status: 'Login Unsuccessful!', err: info});
    }
    req.logIn(user, (err) => {
      if (err) {
        res.statusCode = 401;
        res.setHeader('Content-Type', 'application/json');
        res.json({success: false, status: 'Login Unsuccessful!', err: 'Could not log in user!'});          
      }

      var token = authenticate.getToken({username: req.body.username});
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({success: true, token: token, status: 'You are successfully logged in!'});
    }); 
  }) (req, res, next);
}

const getAllUsers = async (req, res, next) => {
  try {
    const users = await models.User.findAll({
      attributes: ['id', 'username', 'admin']
    });
    res.json({
      users
    });
  }
  catch(error) {
    next(error);
  }
}

const checkJWTToken = (req, res) => {
  passport.authenticate('jwt', {session: false}, (err, user, info) => {
    if (err)
      return next(err);
    
    if (!user) {
      res.statusCode = 401;
      res.setHeader('Content-Type', 'application/json');
      return res.json({status: 'JWT invalid!', success: false, err: info});
    }
    else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      return res.json({status: 'JWT valid!', success: true, user: user});

    }
  }) (req, res);
}

module.exports = {
    signupHandler,
    loginHandler,
    getAllUsers,
    checkJWTToken
}