
const express = require('express');
const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');
const auth = require('../middlewares/auth');

function setupExpress(app) {
    app.engine('hbs', handlebars({
        extname: 'hbs',
    }));
    
    app.set('view engine', 'hbs');
    
    app.use(express.static('public'))

    app.use(express.urlencoded({
        extended: true
    }));

    app.use(cookieParser());

    app.use(auth());
}

module.exports = setupExpress;