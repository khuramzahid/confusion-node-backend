const models = require('../models');

const allAction = (req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    next();
}

const getFavorites = async (req,res,next) => {
    try {
        const favorites = await models.Favorite.findAll({
            where: {
                userId: req.user.dataValues.id
            }
        });
        
        let dishes = [];
        let user = {
            id: req.user.dataValues.id,
            username: req.user.dataValues.username
        };
        for(let j=0; j<favorites.length; j++) {
            const dish = await models.Dish.findOne({
                where: {
                    id: favorites[j].dishId
                }
            });
            dishes.push({
                _id: favorites[j].dishId,
                name: dish.name,
                image: dish.image
            });
        }
        res.json({
            dishes: [...dishes],
            user
        });
    }
    catch(error) {
        next(error);
    }
}

const addFavorite = async (req, res, next) => {
    try {
        let {
            dishId
        } = req.params;

        await models.Favorite.create({
            userId: req.user.dataValues.id,
            dishId
        });

        await getFavorites(req, res, next);
    }
    catch(error) {
        next(error);
    }
}

const deleteFavorites = async (req, res, next) => {
    try {
        await models.Favorite.destroy({
            where: {}
        });
        res.json('Deleted all Favorites.');
    }
    catch(error) {
        next(error);
    }
}

const checkFavorite = async (req, res, next) => {
    const favorites = await models.Favorite.findAll({
        where: {
            userId: req.user.dataValues.id,
            dishId: req.params.dishId
        }
    });

    if (favorites.length == 0) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        return res.json({"exists": false, "favorites": favorites});
    }
    else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        return res.json({"exists": true, "favorites": favorites});
    }
}

const deleteFavorite = async (req, res, next) => {
    try {
        await models.Favorite.destroy({
            where: {
                userId: req.user.dataValues.id,
                dishId: req.params.dishId
            }
        });
        
        await getFavorites(req, res, next);
    }
    catch(error) {
        next(error);
    }
}

module.exports = {
    allAction,
    getFavorites,
    addFavorite,
    deleteFavorites,
    checkFavorite,
    deleteFavorite
}