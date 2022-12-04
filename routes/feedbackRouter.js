const express = require('express');
var authenticate = require('../authenticate');
const cors = require('./cors');
const feedbackRouter = express.Router();

feedbackRouter.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    next();
})
.post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    try {
        console.log("FEEDBACK");
        console.log(req.body);
        console.log(req.user);
        res.json({...req.body});
    }
    catch(error) {
        next(error);
    }
});

module.exports = feedbackRouter;