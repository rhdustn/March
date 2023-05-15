const express = require("express")
const mysql = require("./config")

const InsertCollection ={
    insert : async function(title,content){
        try {
            await mysql.query("INSERT INTO user (title, content) VALUES(?,?)",[title,content])
            console.log("글 추가 완료")
        } catch (error) {
            console.log("글 추가 에러남")
        }
    },
}
module.exports = InsertCollection