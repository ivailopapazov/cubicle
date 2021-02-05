const User = require('../models/User');

const register = async (userData) => {
    // validate
    if (userData.password !== userData.repeatPassword) {
        throw { message: 'Password missmatch!' };
    }

    // hash password
    const user = new User(userData);
    
};

module.exports = {
    register
};