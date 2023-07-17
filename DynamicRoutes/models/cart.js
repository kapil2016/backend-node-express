const Product = require('./product')
const path = require('path');
const rootDir = require('../util/path')
const fs = require('fs')
let cartItems = []
module.exports = class Cart {
    static addToCart(productId) {
        Product.findByID(productId, (product) => {
            fs.readFile(path.join(rootDir, 'cart', 'cart.json'), (err, fileContent) => {
                if (!err) {
                    const parseddata = JSON.parse(fileContent);
                    let totalPrice = parseddata.totalPrice;
                    totalPrice = Number(totalPrice) + Number(product.price)
                    cartItems = parseddata.cartItems
                    const productIndex = cartItems.findIndex(item => item.id === product.id);
                    console.log(productIndex)
                    if (productIndex > -1) {
                        cartItems[productIndex].quantity++;
                        const cartProduct = { cartItems: cartItems, totalPrice: totalPrice }
                        fs.writeFile(path.join(rootDir, 'cart', 'cart.json'), JSON.stringify(cartProduct), err => {
                            console.log(err);
                        })
                    } else {
                        cartItems.push({ ...product, quantity: 1 });
                        const cartProduct = { cartItems: cartItems, totalPrice: totalPrice }
                        fs.writeFile(path.join(rootDir, 'cart', 'cart.json'), JSON.stringify(cartProduct), err => {
                            console.log(err);
                        })
                    }
                } else {
                    const cartProduct = { cartItems: [{ ...product, quantity: 1 }], totalPrice: product.price }
                    fs.writeFile(path.join(rootDir, 'cart', 'cart.json'), JSON.stringify(cartProduct), err => {
                        console.log(err);
                    })

                }
            })

        })

    }
}