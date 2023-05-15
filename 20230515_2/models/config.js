const mysql2 = require("mysql2/promise")

const mysql = mysql2.createPool({
    user:"root",
    password:"kyoung2116!",
    database : "test10",
    multipleStatements : true,
})

module.exports = mysql