// 로그인 하고 게시판에 글 작성 수정, 삭제

// 프로젝트 시작
// express express-session mysql2 ejs dotenv 
const express = require("express");
const session = require("express-session")
const dot = require("dotenv").config()
const path = require("path")
const {sequelize} = require('./models');
const app = express();
const SignUpRouter = require('./routers/signUp')
const LoginRouter = require('./routers/login')
const BorderRouter = require('./routers/border')

app.set("views",path.join(__dirname,"page"))
app.set("view engine","ejs")
app.use(express.urlencoded({extended:false}))
app.use(session({
    secret : process.env.SESSION_KEY,// 세션 키
    resave : false,// 다시 저장할지
    saveUninitialized : false,// 초기화 할지 여부
}))
// force 초기화 여부
sequelize.sync({force : false}).then((e)=>{
    console.log("연결 성공")
}).catch((err)=>{
    console.log(err)
})

app.use('/',SignUpRouter)
app.use("/",LoginRouter)
app.use("/",BorderRouter)


app.listen(8000,()=>{
    console.log("server on")
})