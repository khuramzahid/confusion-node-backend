const express = require('express');
const authenticate = require('../authenticate');
const cors = require('./cors');
const dishRouter = express.Router();

const {
    allAction,
    getDishes,
    addDish,
    deleteDishes,
    getDish,
    updateDish,
    deleteDish,
    getDishComments,
    addDishComment,
    deleteDishComments,
    getDishComment,
    updateDishComment,
    deleteDishComment
} = require('../dao/dishes');

dishRouter.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.all(allAction)
.get(cors.cors, getDishes)
.post(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, addDish)
.put(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
})
.delete(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, deleteDishes);

dishRouter.route('/:dishId')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.cors, getDish)
.post(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /dishes/'+ req.params.dishId);
})
.put(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, updateDish)
.delete(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, deleteDish);

dishRouter.route('/:dishId/comments')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.cors, getDishComments)
.post(cors.corsWithOptions, authenticate.verifyUser, addDishComment)
.put(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes/' + req.params.dishId + '/comments');
})
.delete(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, deleteDishComments);

dishRouter.route('/:dishId/comments/:commentId')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.cors, getDishComment)
.post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /dishes/'+ req.params.dishId
        + '/comments/' + req.params.commentId);
})
.put(cors.corsWithOptions, authenticate.verifyUser, updateDishComment)
.delete(cors.corsWithOptions, authenticate.verifyUser, deleteDishComment);

module.exports = dishRouter;