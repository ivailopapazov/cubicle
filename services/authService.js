const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../config');
const User = require('../models/User');

const register = async ({username, password}) => {
    // TODO: Check if username exists
    const user = new User({username, password});

    return await user.save();
};

const login = async ({username, password}) => {
    let user = await User.findOne({username});
    if (!user) throw { message: 'User not found' };

    let isMatch = await bcrypt.compare(password, user.password); 
    if (!isMatch) throw { message: 'Password does not match' };

    let token = jwt.sign({ _id: user._id, roles: ['admin'] }, SECRET)

    return token;
};

module.exports = {
    register,
    login,
};