const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
    store: celebrate({
        [Segments.BODY]: Joi.object().keys({
            username: Joi.string().required(),
            cpf: Joi.string().required().regex(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, '"XXX.XXX.XXX-XX"'),
            password: Joi.string().required(),
        })
    }),

    show: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            user_id: Joi.string().required().guid(),
        })
    }),

    destroy: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            user_id: Joi.string().required().guid(),
        })
    })
};