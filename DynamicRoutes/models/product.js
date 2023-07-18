const fs = require('fs');
// const path = require('path');
const db = require('..//util/database')

// const p = path.join(
//   path.dirname(process.mainModule.filename),
//   'data',
//   'products.json'
// );

// const getProductsFromFile = cb => {
//   fs.readFile(p, (err, fileContent) => {
//     if (err) {
//       cb([]);
//     } else {
//       cb(JSON.parse(fileContent));
//     }
//   });
// };

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save(cb) {
    db.execute('INSERT INTO products (title , imageUrl , description , price) VALUES (?,?,?,?)', [
      this.title,
      this.imageUrl,
      this.description,
      this.price
    ]).then(result => {
      console.log(result[0])
      cb();
    }).catch(err => console.log(err))
  }

  static fetchAll(cb) {
    db.execute('SELECT * FROM products;').then(result => {
      cb(result[0])
    })
  }

  static findByID(id, cb) {
    db.execute('SELECT * FROM products WHERE id=?', [id]).then(result => {
      cb(result[0][0])
    })
  }

  static editProductDetails(product,cb) {
    const { id, title, imageUrl, description, price } = product;
    db.execute('UPDATE products SET title = ?, imageUrl =? ,description =? , price=? WHERE id=?;', [
      title,
      imageUrl,
      description,
      price,
      id
    ]).then(result => {
      console.log(result[0])
      cb();
    }).catch(err => console.log(err))
  }

  static deleteProduct(id,cb) {
    db.execute('DELETE FROM products WHERE id =?', [id]).then(result => {console.log(result);cb()}).catch(err => console.log(err))
  }
};
