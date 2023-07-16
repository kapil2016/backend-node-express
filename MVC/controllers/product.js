const products = [];

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
    products.push({ title: req.body.title });
    res.redirect('/');
  }

  exports.products = products