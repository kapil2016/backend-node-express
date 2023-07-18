const mysql = require('mysql2')
const pool = mysql.createPool(
    {
        host:'localhost',
        user:'root',
        database:'nodecomplete',
        password:'Amit@#456'
    }
)

module.exports = pool.promise();
