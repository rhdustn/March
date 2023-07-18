const mysql = require("./config")

exports.tableInit3 = async () =>{
    try {
        await mysql.query("SELECT * FROM comment")
    } catch (error) {
        await mysql.query("CREATE TABLE comment(id INT AUTO_INCREMENT PRIMARY KEY,board_id INT ,content VARCHAR(255))")
    }
}

exports.comment = async(comm)