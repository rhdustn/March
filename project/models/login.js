const express = require("express")
const mysql = require("./config")

const logInCollection ={
    logIn : async function(user_id,user_pw){
        console.log(user_pw)
       try {
        // await mysql.query("INSERT INTO user (user_id,user_pw,) VALUES(?,?",[user_id,user_pw])
        const data =await mysql.query("SELECT * FROM user WHERE user_id=? AND user_pw =? ",[user_id,user_pw])
       return data[0]
       } catch (error) {
        console.log("logIn에러남",error)
       }
    }
}
module.exports = logInCollection
