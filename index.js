const express = require('express');

const config = require('./config/config');
const app = express();

// const expressConfig = require('./config/express');
// expressConfig(app);
require('./config/express')(app);

app.get('/', (req, res) => {
    res.render('home', {layout: false});
});

app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}...`));