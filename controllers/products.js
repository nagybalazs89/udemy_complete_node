const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', { title: 'Add Product', path: '/admin/add-product' });
};

exports.postAddProduct = (req, res) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll((products) => {
        res.render('shop', { products: products, title: 'Shop', path: '/' });
    });   
};