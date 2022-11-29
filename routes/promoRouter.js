const express = require('express');
var authenticate = require('../authenticate');
const cors = require('./cors');
const promoRouter = express.Router();

const {
    allAction,
    getPromotions,
    addPromotion,
    deletePromotions,
    getPromotion,
    updatePromotion,
    deletePromotion
} = require('../dao/promotions');

promoRouter.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.all(allAction)
.get(cors.cors, getPromotions)
.post(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, addPromotion)
.put(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, deletePromotions);

promoRouter.route('/:promoId')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.cors, getPromotion)
.post(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /promotions/'+ req.params.promoId);
})
.put(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, updatePromotion)
.delete(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, deletePromotion);

module.exports = promoRouter;