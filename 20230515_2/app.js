// 프로젝트 시작
// 서버객체 만들고
// 서버 대기 상태
// body 객체 사용

 const express = require("express")
 const session = require("express-session")
 const path = require("path")
 const dot = require("dotenv").config()
 const jwt = require("jsonwebtoken")
 const app = express() 
 const mysql = require("mysql2")

 const joinRouter = require("./routers/joinRouter")
 const loginRouter = require("./routers/loginRouter")

app.set("views",path.join(__dirname,"page"))
app.set("view engine","ejs")
app.use(express.urlencoded({extended:false}))
app.use(session({
   // 세션 발급에 사용할 비밀키 노출 안되게env로 만들가
   secret : process.env.SESSION_KEY,
   // 세션을 저장하고 불러올때 세션을 다시 저장할지 여부
   resave :false,
   // 세션에 저장할때 초기화 여부
   saveUninitialized : false
}))

app.use('/join',joinRouter)
app.use('/login',loginRouter)

 app.listen(8000,()=>{
    console.log("서버열림")
 })
