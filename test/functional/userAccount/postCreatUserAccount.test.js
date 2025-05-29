const pactum = require('pactum');
const {
    generateValidUserData
} = require('../../../data/user.data.js')
const {
    userCreationSuccess,
    userCreationFailedEmailExists
} = require('../../../helpers/expectedMessageResponses.js')

describe('API 11: Validar a criação de um novo registro de Usuário', () => {
    let newUserFaker;
    let secondUserFaker;

    before(() => {
        newUserFaker = generateValidUserData()
        secondUserFaker = generateValidUserData({
            email: newUserFaker.email,
            name: 'Duplicate Test User'
        })
    })

    it('[CT001] Criar um novo registro de Usuário com sucesso', async () => {
        await pactum.spec()
            .post('/createAccount')
            .withForm(newUserFaker)
            .expectStatus(200)
            .expectJson('responseCode', userCreationSuccess.responseCode)
            .expectJson('message', userCreationSuccess.message)

    });

    it('[CT002] Tentar criar um usuário com um e-mail que já existe', async () => {
        await pactum.spec()
            .post('/createAccount')
            .withForm(secondUserFaker)
            .expectStatus(200)
            .expectJsonLike(userCreationFailedEmailExists)
    });

    it('[CT003] Tentar criar um usuário com campos obrigatórios faltando', () => {

    });

    it('[CT004] Tentar criar um usuário com dados inválidos', () => {

    });

});