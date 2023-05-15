// 입장토큰만 만들어서 로그인 검증을 했는데
// 엑세스 토큰만 사용한 방식

// 1. 이용자가 로그인 시도를 하고 
// 2. 서버에서 이용자를 확인하고 입장권을 발급해 주고
// JWT 토큰 인증 정보를 payload에 할달하고 생성
// 생성한 토큰을 클라이언트에 반환해주고 클라이언트는 이 입장권을 가지고 있는다
// 4. 클라이언트가 서버에 요청을 할 때 이 입장권도 같이 보내서 요청을 시도한다
// 5. 서버는 요청을 받아서 그 입장권이 유효한지 확인하고 유효한 입장권이면 요청을 처리하고 요청에 대한 응답을 해준다
// 입장권이 정상적인지 확인하고 썩었는지 변조가 되었는지 (변조가 되어ㅛ고 썩었으면 다시 재로그인 시킨다)(입장권을 새로 산다)

//refresh toke 을 같이 사용함ㄴ
//access token만 사용하면 인증 보안이 취약할 수 있어서 다른사람이 access token을 탈취했을때
// 토큰의 유효기간이 끝날떄 까지는 맏을수가 없다 그래서 유효기간을 짧게주고 짧게주면
// 로그인을 계속 해야하는 번거로움이 생기고(사용자가 ㅇ이용하기 힙들다) refresh token의 유효기간을 길게주고 
// access token의 우효기간을 짧게 주어서 너무 어려운 개념은 아니고 jwt 토큰을 2개 사용하는 것
// refresh token은 유효기간을 길게주고 access token이 유효기간이 끝났을떄 발급해주는 역할만 하면 된다

//access token 과 refresh token을 같이 사용한 인증방식
// 1. 클라이언트가 로그인
// 2. 서버에서 사용자를 확인하고 입장권 권한 인증정보를 payload에 할당하고
// refresh token 을 만들어서 데이터 베이스에 저장 해두고 2개의 토큰 전부 클라이언트에게 전달해준다ㅓ
// 3. 클라이언트도 두 토큰을 가지고 있고
// 4. 클라이언트가 요청을 할때 access token을 전달해서 요청한다
// 5. 서버는 전달받은 토큰을 확인하고 access token을 디코드 해서 사용자 정보를 확인하고
// 6. 만약 토큰이 정상적인지 확인(썩은 토큰인지.)
// 7. 변조된 토큰이면 새로 로그인 시킬수 있게 한다
// 8. 만약에 날짜가 지난 토큰이면 refresh token으로 다시 재발급 해준다 

// 쉽게 엑세스 토큰은 우리가 사용하는 그대로 이고 refresh token만 추가 되었는데 access token의 발급 용도로만 알고있자. 

// 오늘 사용할 모듈
// dotenv express cookie-parser jsonwebtokwn

// 1. package.json
// 서버객체 만들고
// 3. 서버 대기 상태 




const express = require("express");
const dot = require("dotenv").config()
const path = require("path");
const app = express()
const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser")
const { decode } = require("punycode");
app.set("views",path.join(__dirname,"page"));

app.set("view engine","ejs")

app.use(express.urlencoded({extended:false}))                       
app.use(cookie())                     

// 더미로 회원가입 한 사람의 정보 객체
const user = {
    id : "yeon",
    pw : "123"
}

app.get('/',(req,res)=>{
    res.render("login")
})

app.post('/login',(req,res)=>{
    // 요청 객체의 body에 user_id 
    const {user_id,user_pw}=req.body;

    if(user_id === user.id && user_pw === user.pw){
        //access token 발급
        const accessToken = jwt.sign({
            id : user.id,

        },process.env.ACCESS_TOKEN_KEY,{
            expiresIn : "20s"
        });
        const refreshToken = jwt.sign({
            id : user.id
        },process.env.REFRESH_TOKEN_KEY,{
            expiresIn : "1d"
        })
        //쿠키생성
        res.cookie("refresh",refreshToken,{maxAge : 24*60*60*1000})
        res.render("join",{accessToken});
    }
})
app.post("/refresh",(req,res)=>{
    // 옵션 체이닝 뒤에 오는 키 값이 있는지 먼저 확인하고 값을 호출해서 반환
    // 그래서 크래쉬 방지
    if(req.cookies?.refresh){
        const refreshToken = req.cookies.refresh;
        jwt.verify(refreshToken,process.env.REFRESH_TOKEN_KEY,(err, decode)=>{
            // err가 있으면 다시 로그인 해주세요
            if(err){
                res.send("로그인을 다시 해주세요")
            } else{
                const accessToken = jwt.sign({
                    id : user.id
                },process.env.ACCESS_TOKEN_KEY,{
                    expiresIn : "20s"
                });
                res.render("join",{accessToken});
            };
        })
    }else{
        res.send("다시 로그인 해주세요")
    }
})

app.listen(8000,()=>{
    console.log("server on!")
})