const rootDir = require('../util/path');
const path = require('path')
const fs = require('fs');

let products = []

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }
    save() {
        fs.readFile(path.join( rootDir , 'Data' , 'products.json'), (err, data) => {
            if (!err) {
                 products = JSON.parse(data);
                products.push(this) ;
                const parsedData = JSON.stringify(products)
                fs.writeFile(path.join( rootDir , 'Data' , 'products.json') , parsedData , err =>{
                    console.log(err)
                })
            }else{
                fs.writeFile(path.join( rootDir , 'Data' , 'products.json') , JSON.stringify([this]) , err =>{
                    console.log(err)
                })
            }

        })
    }

    static fetchAll(cb){
        fs.readFile(path.join( rootDir , 'Data' , 'products.json'), (err, data) => {
            if (!err) {
                 products = JSON.parse(data);
                 cb(products) ;
                
            }

        })
    }


}