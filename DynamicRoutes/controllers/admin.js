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
  req.user.createProduct({
    title:title,
    imageUrl:imageUrl,
    price:price,
    description:description
  })
 .then(result=>{
    console.log(result);
    res.redirect('/admin/products')
  }).catch(err=>console.log(err))
  
};

exports.getProducts = (req, res, next) => {
  req.user.getProducts().then(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};

exports.editProduct = (req , res , next)=>{
  const productId = req.params.productId ;
  req.user.getProducts({where:{id:productId}}).then( (products)=>{
    const product = products[0]
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
  const prod = {...req.body,id:id}
  Product.findByPk(id).then((product)=>{
    product.title = prod.title  ;
    product.description = prod.description;
    product.imageUrl = prod.imageUrl ;
    product.price = prod.price ;
    product.save().then(result =>{
      console.log(result);
      res.redirect('/admin/products')
    }).catch(err=>console.log(err));
    
  })
}
exports.deleteProduct=(req , res , next)=>{
  const id = req.params.productId
  Product.findByPk(id).then(product=>{
      return product.destroy(); 
  }).then(result =>{
    res.redirect('/admin/products') 
  }).catch(err=>{
    console.log(err)
  })
 
}
