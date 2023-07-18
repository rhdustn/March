const mysql2 = require("mysql2/promise")
const mysql = mysql2.createPool({
    user : "root",
    password : "kyoung2116!",
    database : "test13",
    multipleStatements : true
})

module.exports = mysql