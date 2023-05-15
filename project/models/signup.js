const express = require("express")
const mysql = require("./config")
const signupCollection ={
    signUp : async function(user_id,user_pw,user_name){
       try {
        await mysql.query("INSERT INTO user (user_id,user_pw,user_name) VALUES(?,?,?)",[user_id,user_pw,user_name])
        
       } catch (error) {
        console.log("signup 에러남",error)
       }
    }
}
module.exports = signupCollection

//함수라는 아이는 이름이 필요해




