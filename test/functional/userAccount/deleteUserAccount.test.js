const pactum = require('pactum');
const {
    generateValidUserData
} = require('../../../data/user.data.js')
const {
    userCreationSuccess,
    userDeletionSuccess,
    loginErrorUserNotFound
} = require('../../../helpers/expectedMessageResponses.js')

describe('API 12: Validar a remoção de usuários', () => {
    let newUserFaker;
    let userEmail;
    let userPassword;
    let payload;

    before(() => {
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

    it('[CT001] Remover um registro de Usuário com sucesso', async () => {
        if (!userEmail || !userPassword) {
            throw new Error('SetUp não executado! Necessário a criação de um usuário para este teste!');
        }
        await pactum.spec()
            .delete('/deleteAccount')
            .withForm(payload)
            .expectStatus(200)
            .expectJsonLike(userDeletionSuccess);
    });

    it('[CT002] Validar bloqueio do login após usuário ser removido', async () => {
        if (!userEmail || !userPassword) {
            throw new Error('SetUp não executado! Necessário a criação de um usuário para este teste!');
        }

        await pactum.spec()
            .post('/verifyLogin')
            .withForm(payload)
            .expectStatus(200)
            .expectJsonLike(loginErrorUserNotFound);
    });

    it('[CT003] Validar erro ao inserir dados incorretos para remoção do usuário', () => {

    });

    it('[CT004] Validar erro ao deletar uma conta não existente', () => {

    });

});