const { table } = require("console")
const mysql = require("./config")

// 테이블 세팅

exports.tableInit = async () =>{
    try {
        await mysql.query("SELECT * FROM users")
    } catch (error) {
        await mysql.query("CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY,user_id VARCHAR(20), user_pw VARCHAR(100),user_name VARCHAR(100),token VARCHAR(255))")
    }
}

// 회원가입

exports.signup = async (user_id,hash,user_name) =>{
    try {
        await mysql.query("INSERT INTO users(user_id,user_pw,user_name) VALUES(?,?,?)",[user_id,hash,user_name])
    } catch (error) {
        console.log(error)
    }
}
exports.userSelect = async (user_id)=>{
    try {
      const [data] = await mysql.query("SELECT * FROM users WHERE user_id =?",[user_id])
      
        return data[0]
    } catch (error) {
        
    }
}

// 로그인
exports.logIn = async (user_id) =>{
    try {
        const [data] =  await mysql.query("SELECT * FROM users WHERE user_id =?",[user_id])
        return data[0]
    } catch (error) {
        console.log(error)
    }
}

exports.updateToken = async(user_id,token)=>{
    try {
        await mysql.query("UPDATE users SET token =? WHERE user_id=?",[token,user_id])
    } catch (error) {
        console.log(error)
    }
}

// exports.Login
