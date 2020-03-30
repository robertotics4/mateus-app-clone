const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
    store: celebrate({
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
            price: Joi.number().precision(2).required(),
            department_id: Joi.number().integer().required(),
        })
    }),

    show: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            product_id: Joi.number().integer().required()
        })
    }),

    update: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            product_id: Joi.number().integer().required()
        })
    }),

    destroy: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            product_id: Joi.number().integer().required()
        })
    }),
};