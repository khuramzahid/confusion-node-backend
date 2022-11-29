const express = require('express');
var authenticate = require('../authenticate');
const cors = require('./cors');
const favoritesRouter = express.Router();

const {
    allAction,
    getFavorites,
    addFavorite,
    deleteFavorites,
    checkFavorite,
    deleteFavorite
} = require('../dao/favorites');

favoritesRouter.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.all(allAction)
.get(cors.corsWithOptions, authenticate.verifyUser, getFavorites)
.post(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /favorites/');
})
.put(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /favorites');
})
.delete(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, deleteFavorites);

favoritesRouter.route('/:dishId')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.corsWithOptions, authenticate.verifyUser, checkFavorite)
.post(cors.corsWithOptions, authenticate.verifyUser, addFavorite)
.put(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /favorites/'+ req.params.dishId);
})
.delete(cors.corsWithOptions, authenticate.verifyUser, deleteFavorite);

module.exports = favoritesRouter;