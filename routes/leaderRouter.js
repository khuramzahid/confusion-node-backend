const express = require('express');
var authenticate = require('../authenticate');
const cors = require('./cors');
const leaderRouter = express.Router();

const {
    allAction,
    getLeaders,
    addLeader,
    deleteLeaders,
    getLeader,
    updateLeader,
    deleteLeader
} = require('../dao/leaders');

leaderRouter.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.all(allAction)
.get(cors.cors, getLeaders)
.post(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, addLeader)
.put(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaders');
})
.delete(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, deleteLeaders);

leaderRouter.route('/:leaderId')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.cors, getLeader)
.post(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /leaders/'+ req.params.leaderId);
})
.put(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, updateLeader)
.delete(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, deleteLeader);

module.exports = leaderRouter;