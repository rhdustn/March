const express = require("express")
const cors = require("cors")
const path = require("path")
const UploadRouter = require("./routers/upload")
const app = express()


app.use(cors({
    origin : "http://127.0.0.1:5500",
    // 요청해서 쿠키를 포함항지
    credentials : true,

}))
//정적파일 경로 추가했던것처럼
app.use(express.urlencoded({extended:false}))
app.use("/img",express.static(path.join(__dirname,"uploads")))
// 요청과 응답에서 json 형식의 데이터를 전달받았을때
// 요청과 응답에서 jdsonb 파싱을 해서 자바스크립트 객체로 변환시켜주는 미들웨어
// json 메소드로 json 파싱
app.use(express.json())
app.use("/upload",UploadRouter)


app.listen(8080,()=>{
    console.log("server on!")
})