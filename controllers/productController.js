const { Router } = require('express');
const productService = require('../services/productService');
const { validateProduct } = require('./helpers/productHelpers');

const router = Router();

router.get('/', (req, res) => {
    let products = productService.getAll(req.query);

    res.render('home', {title: 'Browse', products });
});

router.get('/create', (req, res) => {
    res.render('create', {title: 'Create'});
});

router.post('/create', validateProduct, (req, res) => {
    productService.create(req.body)
        .then(() => res.redirect('/products'))
        .catch(() => res.status(500).end())
});

router.get('/details/:productId', (req, res) => {
    let product = productService.getOne(req.params.productId);
    
    res.render('details',{title: 'Product Details', product})
});

module.exports = router;
