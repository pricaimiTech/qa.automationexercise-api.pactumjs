const {
    faker
} = require('@faker-js/faker');

/**
 * Gera um objeto de dados de usuário válido para o endpoint de criação de conta.
 * @param {object} overrides - Um objeto com campos para sobrescrever os valores padrão gerados pelo Faker.
 * @returns {object} Objeto de dados do usuário.
 */
function generateValidUserData(overrides = {}) { 
    const defaultUserData = {
        name: faker.person.fullName(),
        email: faker.internet.email({
            provider: 'test.automationexercise.com'
        }).toLowerCase(),
        password: faker.internet.password({
            length: 10,
            memorable: false,
            prefix: 'P@ssWrd!'
        }),
        title: faker.helpers.arrayElement(['Mr', 'Mrs', 'Miss']),
        birth_date: faker.number.int({
            min: 1,
            max: 28
        }).toString(),
        birth_month: faker.date.month(),
        birth_year: faker.number.int({
            min: 1950,
            max: 2005
        }).toString(),
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        company: faker.company.name(),
        address1: faker.location.streetAddress(),
        address2: faker.location.secondaryAddress(),
        country: faker.location.country(),
        zipcode: faker.location.zipCode(),
        state: faker.location.state(),
        city: faker.location.city(),
        mobile_number: faker.phone.number('##########')
    };

    return {
        ...defaultUserData,
        ...overrides
    };
}

module.exports = {
    generateValidUserData,
};