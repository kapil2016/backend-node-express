const Product = require('../models/product');
const Cart = require('../models/cart')

exports.getProducts = (req, res, next) => {
  Product.findAll().then(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  }).catch(err => console.log(err));
};

exports.getProduct = (req, res, next) => {
  const id = req.params.productID

  Product.findByPk(id).then((product) => {
    res.render('shop/product-detail', {
      product: product,
      pageTitle: product.title,
      path: '/products'
    })
  })
}

exports.getIndex = (req, res, next) => {
  Product.findAll().then(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  }).catch(err => console.log(err));
};

exports.getCart = (req, res, next) => {
  req.user.getCart()
    .then(cart => {
      return cart.getProducts()
    }).then(products => {
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: products
      });
    }).catch(err => console.log(err))

};

exports.postAddToCart = (req, res, next) => {
  const productId = req.params.productId;

  let fetchedCart;
  let newQuantity = 1;

  req.user.getCart()
    .then(cart => {
      fetchedCart = cart;
      return cart.getProducts({ where: { id: productId } })
    }).then(products => {
      let product;
      if (products.length > 0) {
        product = products[0];
      }
      if (product) {
        //
        let oldQuantity = product.cartitmes.quantity;
        newQuantity = oldQuantity + 1
        return product
      }
      return Product.findByPk(productId)

    }).then(product => {
      return fetchedCart.addProduct(product, {
        through: {
          quantity: newQuantity
        }
      })
    }).then(() => { res.redirect('/cart') })
    .catch(err => console.log(err))


}

exports.delteCartItem = (req , res , next )=>{
  const itemId = req.body.productId;
  console.log(itemId , 'this is id')
  req.user.getCart().then(cart=>{
   return cart.getProducts({where:{id:itemId}})
  }).then(products=>{
    const product = products[0]
   return  product.cartitmes.destroy();
  }).then(()=>{
    res.redirect('/')
  }).catch(err=>console.log(err))
}

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
