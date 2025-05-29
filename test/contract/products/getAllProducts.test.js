const Joi = require('joi');
const pactum = require('pactum');
const {
    allProductsListResponseSchema
} = require('../../../schema/product/productSchema')

describe('API 1: Validar a busca de todos produtos da lista', () => {

    it('[CT-CONTRACT-001] Validar o contrato do retorno de todos os produtos', async () => {
        const response = await pactum.spec()
            .get('/productsList')
            .expectStatus(200)

        Joi.assert(JSON.parse(response.body), allProductsListResponseSchema)
    });
});