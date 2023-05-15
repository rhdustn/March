// 프로젝트 시각



// 로그인 할때 
// JWT 토큰 사용

// JSON WEB TOKEN   
//웹 표준으로 두 객체의 JSON 객체를 사용해서 정보를 안정성 있게 전달해준다

// jwt 는 사용할 정보를 자체적으로 가지고 있다.(우리가 필요한 것들 유저 정보같은)
// jwt로 발급한 토큰은 기본정보(유저의 프로필)
// 그리고 토큰이 정상인지 검증(서명을 포함하고 있다. signature)

// 주로 로그인이 정상적인지 회원 인증 권에서 사용한다

//jwt는 유저가 로그인을 요청하면 서버에서 유저의 정보를 가지고
// 정상적인 루트로 로그인을 요청한 유ㅓ면 토큰을 발급해서 전달해준다
// 유저가 서버에 요청을 할때 jwt 토큰을 포함해서 요청을 하면 서버가
// 요청을 받고 톸ㄴ이 썩은 토큰인디 검사를 해서 착한 토큰이면 유저가 작업을 처리해주고 응답해 준다

//jwt를 쓰는 이유는 안정성 있게 정보를 전달해서 요청을 할 수 있다

// jwt를 생성하면 우리가 사용할 모듈이 인코딩과 해싱 작업을 해준다

// HMAC : 해싱 기법을 적용해서 메시지의 위변조를 방지하는 기법
//SHA256 : 임의의 길이 메시디를 256 비트의 축약된 메시지로 만들어내는 해시 알고리즘


// JWT의 구조

//-------------------------------------
// let header = {
//     // 사용하는 해싱 알고리즘
//     alg : "SHA256",
//     // 토큰의 타입
//     type : "JWT"

// }
// let payload ={
//     // 토큰의 이름 제목
//     sub :"679878",
//     // 유저의 이름
//     name : "hi",
//     // 토큰 발급된 시간 발급된지 얼마나 지났는지
//     lat : "123123"
// }
// //-------------------------------------------

// 비밀키 생성
// let signature = HMACSHA256(BASE64URL(header)+ BASE64URL(payload)) 

//header : 타입과 알고리즘의 정보를 가지고 있고
// payload: 유저의 정보와 만료기간이 포함된 객체를 가지고 있다
// signature : hearder,payload 을 인코딩해서 합쳐서 해싱해서 비밀키로 만듬

// 사용할 모듈 express, jsonwebtoken,dotenv

// dotenv 어플리 케이션을 만들면서 설정값을 여기에 저장한다
// 보안 민감한 정보를 .env 파일에 설정값을 작성해둔다
// 비밀 키, 암호, API 토큰 등등을 저장해놓는다

const express = require("express")
const path = require("path")
const jwt = require("jsonwebtoken")
// dotenv 모듈 가져오면서 config메소드 실행
// .env파일을  읽어서  적용
const dot = require("dotenv").config()

// process.env.객체에 우리가 .env파일에 설정한 이름으로 키값이 들어있다
const KEY = process.env.KEY

// 페이지부터 만들자.
const app = express()

app.set("views",path.join(__dirname,"page"))
app.set("view engine","ejs");
//body를 사용하기 위해서 extended 설정은 깊은 객체 설정할 지 안할지
app.use(express.urlencoded({extended : false}))


app.get("/",(req,res)=>{
    res.render("main")
})
app.post("/login",(req,res)=>{
    //로그인을 하면 정상적으로 했다 가정하고 토큰을 발급
    // 유저 정보는 객체로 만들어 주자
    const name = "user1";
    const KEY = process.env.KEY;
    // sign 메서드 jwt 토큰 확인
    // 첫번째 매개변수 헤더객체
    // 두번째 매개변수 비밀키
    // 세번쨰 매개변수 payload 객체
    let token = jwt.sign({
        // 타입은 jwt 
        type : "JWT",
        // user name
        name : name
    },KEY,{
        // 토큰을 유지시킬 유효시간 만료시간
        // 5분 유지 토큰
        expiresIn :"5m",
        // 토큰 발급한 사람
        issuer : "user1"
    })
    res.send(JSON.stringify(token));
    // 점으로 구분해서
    // header :eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
    // payload : eyJ0eXBlIjoiSldUIiwibmFtZSI6InVzZXIxIiwiaWF0IjoxNjgzODU4NzE5LCJleHAiOjE2ODM4NTkwMTksImlzcyI6InVzZXIxIn0
    // signature :GcioaJmk0ozPK1Y1zAUHpZck56yJC5x5tx9V-eyms_E"
})

app.listen(8080,()=>{
    console.log("서버 열림")
})