const pactum = require('pactum');
const {
    generateValidUserData
} = require('../../../data/user.data.js')
const {
    userCreationSuccess,
    userCreationFailedEmailExists
} = require('../../../helpers/expectedMessageResponses.js')

describe('API 11: Validar a criação de um novo registro de Usuário', () => {
    let firstUserEmail

    beforeEach(() => {});

    it('[CT001] Criar um novo registro de Usuário com sucesso', async () => {
        const newUserFaker = generateValidUserData()
        firstUserEmail = newUserFaker.email

        await pactum.spec()
            .post('/createAccount')
            .withForm(newUserFaker)
            .expectStatus(200)
            .expectJson('responseCode', userCreationSuccess.responseCode)
            .expectJson('message', userCreationSuccess.message)

    });

    it('[CT002] Tentar criar um usuário com um e-mail que já existe', async () => {
        const secondUserFaker = generateValidUserData({
            email: firstUserEmail,
            name: 'Duplicate Test User'
        })

        await pactum.spec()
            .post('/createAccount')
            .withForm(secondUserFaker)
            .expectStatus(200)
            .expectJson('responseCode', userCreationFailedEmailExists.responseCode)
            .expectJson('message', userCreationFailedEmailExists.message)
    });

    it('[CT003] Tentar criar um usuário com campos obrigatórios faltando', () => {

    });

    it('[CT004] Tentar criar um usuário com dados inválidos (ex: formato de e-mail incorreto)', () => {

    });

});