const config = {
    development: {
        PORT: 5000,
        DB_CONNECTION: 'mongodb://localhost/cubicle'
    },
    production: {
        PORT: 80,
        DB_CONNECTION: 'insert mongodb atlas connection here'
    }
};

module.exports = config[process.env.NODE_ENV.trim()]