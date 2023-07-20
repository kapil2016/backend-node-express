const Sequelize = require('sequelize');
const sequelize = require('../database/database')

const User = sequelize.define('users',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true,
    },
    email: Sequelize.STRING,
    phone: Sequelize.STRING,
    username:Sequelize.STRING
})

module.exports = User ;