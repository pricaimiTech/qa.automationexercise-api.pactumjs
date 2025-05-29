const userCreationSuccess = {
    responseCode: 201,
    message: "User created!"
}

const userCreationFailedEmailExists = {
    responseCode: 400,
    message: 'Email already exists!',
};


module.exports = {
    userCreationSuccess,
    userCreationFailedEmailExists,
};