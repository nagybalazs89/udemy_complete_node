const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../util/path');

const admin = require('./admin');

router.get('/', (req, res, next) => {
    const products = admin.products;
    res.render('shop', { products: products, title: 'Shop', path: '/' });
});

module.exports = router;