const Sequelize = require('sequelize')
const sequelize = new Sequelize('nodecomplete','root','Amit@#456',{
    dialect:'mysql',
    host:'localhost'  
})
module.exports = sequelize ;

// const mysql = require('mysql2')
// const pool = mysql.createPool(
//     {
//         host:'localhost',
//         user:'root',
//         database:'nodecomplete',
//         password:'Amit@#456'
//     }
// )

// module.exports = pool.promise();
