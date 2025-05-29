const Joi = require('joi');
const pactum = require('pactum');
const {
    generateValidUserData
} = require('../../../data/user.data.js')
const {
    userCreationSuccess
} = require('../../../helpers/expectedMessageResponses.js')
const {
    expectMessageSchema
} = require('../../../schema/generals/expectMessageSchema')

describe('API 12: Validar a remoção de um usuário', () => {

    let newUserFaker;
    let userEmail;
    let userPassword;
    let payload;

    before(()=>{
        newUserFaker = generateValidUserData()
        userEmail = newUserFaker.email
        userPassword = newUserFaker.password

        payload = {
            email: userEmail,
            password: userPassword
        }
    })

    it('[SetUp] Criar um novo registro de Usuário com sucesso', async () => {
        await pactum.spec()
            .post('/createAccount')
            .withForm(newUserFaker)
            .expectStatus(200)
            .expectJson('responseCode', userCreationSuccess.responseCode)
            .expectJson('message', userCreationSuccess.message)

    });

    it('[CT-CONTRACT-001] Validar o contrato da remoção de um usuário', async () => {
        const response = await pactum.spec()
            .delete('/deleteAccount')
            .withForm(payload)
            .expectStatus(200)

        Joi.assert(JSON.parse(response.body), expectMessageSchema)
    });
});