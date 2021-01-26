const { Router } = require('express');

const productController = require('./controllers/productController');
const aboutController = require('./controllers/aboutController');

const router = Router();

router.use('/about', aboutController);
router.use('/', productController);

module.exports = router;