const mysql2 = require("mysql2/promise")

const mysql = mysql2.createPool({
    user : "root",
    password : "kyoung2116!",
    database : "list",
    multipleStatements : true
})

mysql.getConnection((err,res)=>{
    console.log(err)
})
module.exports = mysql;