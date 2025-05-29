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
    let userEmail;
    let userPassword;

    beforeEach(() => {});

    it('[SetUp] Criar um novo registro de Usuário com sucesso', async () => {
        const newUserFaker = generateValidUserData()
        userEmail = newUserFaker.email
        userPassword = newUserFaker.password

        await pactum.spec()
            .post('/createAccount')
            .withForm(newUserFaker)
            .expectStatus(200)
            .expectJson('responseCode', userCreationSuccess.responseCode)
            .expectJson('message', userCreationSuccess.message)

    });

    it('[CT001] Remover um registro de Usuário com sucesso', async () => {
        if (!userEmail || !userPassword) {
            throw new Error("SetUp não executado! Necessário a criação de um usuário para este teste!");
        }

        const payload = {
            email: userEmail,
            password: userPassword
        }

        await pactum.spec()
            .delete('/deleteAccount')
            .withForm(payload)
            .expectStatus(200)
            .expectJsonLike(userDeletionSuccess);
    });

    it('[CT002] Validar bloqueio do login após usuário ser removido', async () => {
        if (!userEmail || !userPassword) {
            throw new Error("SetUp não executado! Necessário a criação de um usuário para este teste!");
        }

        const loginPayload = {
            email: userEmail,
            password: userPassword,
        };

        await pactum.spec()
            .post('/verifyLogin')
            .withForm(loginPayload)
            .expectStatus(200)
            .expectJsonLike(loginErrorUserNotFound);
    });

    it('[CT003] Validar erro ao inserir dados incorretos para remoção do usuário', () => {

    });

    it('[CT004] Validar erro ao deletar uma conta não existente', () => {

    });

});