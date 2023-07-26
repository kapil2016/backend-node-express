const Sequelize = require('sequelize');
const sequelize = new Sequelize('nodecomplete','root','Amit@#456',{
    dialect:'mysql',
    host:'localhost'
}) ;

module.exports = sequelize ;
