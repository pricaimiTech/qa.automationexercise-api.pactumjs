const Joi = require('joi');
const { categorySchema } = require('../category/categorySchema')

const productSchema = Joi.object({
    id: Joi.number().integer().positive().required().example(1),
    name: Joi.string().required().example('Blue Top'),
    price: Joi.string().pattern(/^Rs\.\s\d+$/).required().example('Rs. 500'),
    brand: Joi.string().allow(null, '').optional().example('Polo'), 
    category: categorySchema
}).description('Schema para um único produto');

const allProductsListResponseSchema  = Joi.object({
    responseCode: Joi.number().valid(200).required(),
    products: Joi.array().items(productSchema).required()
}).description('Schema para listar todos os produtos');

module.exports = {
    productSchema,
    allProductsListResponseSchema 
}