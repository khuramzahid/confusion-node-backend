const express = require('express');
var authenticate = require('../authenticate');
const cors = require('./cors');
const feedbackRouter = express.Router();

const {
    allAction,
    sendEmail
} = require('../dao/feedback');

feedbackRouter.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.all(allAction)
.post(cors.corsWithOptions, authenticate.verifyUser, sendEmail);

module.exports = feedbackRouter;