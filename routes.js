const { Router } = require('express');

const productController = require('./controllers/productController');
const accessoryController = require('./controllers/accessoryController');
const homeController = require('./controllers/homeController');

const router = Router();

router.use('/', homeController);
router.use('/products', productController);
router.use('/accessories', accessoryController)
router.get('*', (req, res) => {
    res.render('404');
});

module.exports = router;