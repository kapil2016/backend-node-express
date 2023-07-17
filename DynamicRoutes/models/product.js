const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.id = JSON.stringify(Date.now());
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static findByID(id , cb){
    getProductsFromFile((products)=>{
      const product = products.find( p => p.id === id)
      cb(product) ;
    })
  }

  static editProductDetails(product){
    getProductsFromFile(products => {
      const index = products.findIndex(item => item.id ===product.id)
      products[index] = product ;
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

  static deleteProduct(id){
    getProductsFromFile(products => {
      const updatedProducts = products.filter(item => item.id !== id)
      fs.writeFile(p, JSON.stringify(updatedProducts), err => {
        console.log(err);
      });
    });
  }
};