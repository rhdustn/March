// todo-list 만들기
const express = require("express")

const mysql2 = require("mysql2")

const path = require("path")

const app = express()

const _mysql = mysql2.createConnection({
    user : "root",
    password : "kyoung2116!",
    database : "test3",
    multipleStatements : true
})
// express views 속성을 설정 (파일들의 경로)
app.set("views",path.join(__dirname,"todo"))

app.set("views engine","ejs")
app.use(express.urlencoded({extended : false}));
app.get('/',(req,res)=>{
    res.render('main')
})
const PORT = 8080;
app.listen(PORT,()=>{
    console.log('todo-list')
})
