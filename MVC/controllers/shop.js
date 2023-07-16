// const adminData = require('./product')
const Product = require('../modals/product')

module.exports.getShop = (req, res, next) => {
    Product.fetchAll((products)=>{
      res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
      });
    })
    
  }