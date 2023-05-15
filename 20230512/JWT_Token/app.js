// 프로젝트 시작

// page 폴더 
// 경로 연결 view
// 퍋ㅈ 엔진 ejs

const express = require("express")
const path = require("path")
const session = require("express-session")
const pageRouter = require('./routers/page')
const tokenRouter = require('./routers/token')
const verifyRouter = require('./routers/verify')

const app = express()
app.use(session({
    // 세션을 발급할때 사용할 키 이것도 나중에는 소스코드 노출 안되게 바꿔놓자
    secret : process.env.KEY2,
    // 세션이 뱐걍되거나 저장할때나 저장하고 불러올때 다시 저장할지 여부
    resave : false,
    // 세션에 젖아할때 초기화 여부
    saveUninitialized : true,
}))
app.use(pageRouter);
app.use(tokenRouter);
app.use("/userVerify",verifyRouter)
// 세선을 사용하기 위해 설치할 모듈
// npm i express-session
//-------------------------
app.set("views",path.join(__dirname,"page"))
app.set("view engine","ejs")
app.use(express.urlencoded({extended :false}))                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         

app.listen(8080,()=>{
    console.log("server on")
})