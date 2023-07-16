const Product = require('../modals/product')
const products = []

module.exports.productController = (req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  }

  module.exports.postAddproduct = (req, res, next) => {
    
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
  }

  exports.products = products ;