const Sequelize = require('sequelize');
const sequelize = require('../database/database')

const ShopItem = sequelize.define('shopitem',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true,
    },
    name: Sequelize.STRING,
    description: Sequelize.STRING,
    quantity:Sequelize.INTEGER,
    price:Sequelize.DOUBLE
})

module.exports = ShopItem ;