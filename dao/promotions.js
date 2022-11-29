const models = require('../models');

const allAction = (req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
}

const getPromotions = async (req,res,next) => {
    try {
        let promotions = await models.Promotion.findAll({});
        for(let j=0; j<promotions.length; j++) {
            promotions[j].dataValues = {
                ...promotions[j].dataValues,
                _id: promotions[j].dataValues.id
            }
        }
        res.json(promotions);
    }
    catch(error) {
        next(error);
    }
}

const addPromotion = async (req, res, next) => {
    try {
        let {
            name,
            image,
            label,
            price,
            featured,
            description
        } = req.body;

        const insertedPromotion = await models.Promotion.create({
            name,
            image,
            label,
            price,
            featured,
            description,
            createdAt: new Date(),
            updatedAt: new Date()
        }, { returning: true });

        res.end('Added promo: ' + insertedPromotion.id);
    }
    catch(error) {
        next(error);
    }
}

const deletePromotions = async (req, res, next) => {
    try {
        await models.Promotion.destroy({
            where: {}
        });
        res.end('Deleted all promotions.');
    }
    catch(error) {
        next(error);
    }
}

const getPromotion = async (req,res,next) => {
    try {
        const promo = await models.Promotion.findOne({
            where: {
                id: req.params.promoId
            }
        });
        res.json(promo);
    }
    catch(error) {
        next(error);
    }
}

const updatePromotion = async (req, res, next) => {
    try {
        let {
            name,
            image,
            label,
            price,
            featured,
            description
        } = req.body;

        const insertedPromotion = await models.Promotion.update({
            name,
            image,
            label,
            price,
            featured,
            description,
            updatedAt: new Date()
        }, { 
            where: { id: req.params.promoId },
            returning: true,
            plain: true
        });

        res.end('Updated promo: ' + req.params.promoId);
    }
    catch(error) {
        next(error);
    }
}

const deletePromotion = async (req, res, next) => {
    try {
        await models.Promotion.destroy({
            where: {
                id: req.params.promoId
            }
        });
        res.end('Deleted promo: ' + req.params.promoId);
    }
    catch(error) {
        next(error);
    }
}

module.exports = {
    allAction,
    getPromotions,
    addPromotion,
    deletePromotions,
    getPromotion,
    updatePromotion,
    deletePromotion
}