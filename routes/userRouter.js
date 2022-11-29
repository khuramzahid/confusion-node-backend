var express = require('express');
var authenticate = require('../authenticate');
var passport = require('passport');
const userRouter = express.Router();
const cors = require('./cors');
const {
  signupHandler,
  loginHandler,
  getAllUsers,
  checkJWTToken
} = require('../dao/users');

userRouter
.options('*', cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get('/', cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, getAllUsers)
.post('/signup', cors.corsWithOptions, signupHandler)
.post('/login', cors.corsWithOptions, loginHandler)
.get('/checkJWTtoken', cors.corsWithOptions, checkJWTToken);
// JWT auth is not like sessions. So no logout. 
// We do have the option to have token whitelist at server-side.
// Logout would mean removing those tokens from that whitelist.

module.exports = userRouter;
