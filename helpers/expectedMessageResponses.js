const userCreationSuccess = {
    responseCode: 201,
    message: 'User created!'
}

const userCreationFailedEmailExists = {
    responseCode: 400,
    message: 'Email already exists!',
};

const userDeletionSuccess = {
    responseCode: 200,
    message: 'Account deleted!',
};

const loginErrorUserNotFound = {
    responseCode: 404,
    message: 'User not found!'
}

module.exports = {
    userCreationSuccess,
    userCreationFailedEmailExists,
    userDeletionSuccess,
    loginErrorUserNotFound
};