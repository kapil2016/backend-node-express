const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageUrl, description, price);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};

exports.editProduct = (req , res , next)=>{
  const productId = req.params.productId ;
  Product.findByID(productId , (product)=>{
    res.render('admin/edit-product', {
      product:product,
      pageTitle: product.title,
      path: '/admin/edit-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: false
    });
  })
  
}

exports.postEditProduct = (req , res , next)=>{
  const id = req.params.productId
  const product = {...req.body,id:id}
  Product.editProductDetails(product)
  res.redirect('/admin/products')

}
exports.deleteProduct=(req , res , next)=>{
  const id = req.params.productId
  Product.deleteProduct(id)
  res.redirect('/admin/products')
}
