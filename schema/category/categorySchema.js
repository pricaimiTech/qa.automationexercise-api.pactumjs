const Joi = require('joi');

const categorySchema = Joi.object({
    usertype: Joi.object({
        usertype: Joi.string().required().example('Women')
    }).required(),
    category: Joi.string().required().example('Tops')
}).required();

module.exports = {
    categorySchema
}