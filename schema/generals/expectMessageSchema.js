const Joi = require('joi');


const expectMessageSchema = Joi.object({
    responseCode: Joi.number().valid(200).required(),
    message: Joi.string().valid('Account deleted!').required()
}).required().description('Schema padrão para response com status code e mensagem');

module.exports = {
    expectMessageSchema
}