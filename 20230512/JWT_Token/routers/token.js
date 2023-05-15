// jsonwebtoken 설치
// 
const router  = require('express').Router();
const dot = require("dotenv").config();
const jwt = require('jsonwebtoken')

router.post("/login",(req,res)=>{
    const name = "yeon"
    const key = process.env.KEY
    let token = jwt.sign({
        type : "JWT",
        name : name
    },key,{
        expiresIn : "5m",
        // 토큰 발급자
        issuer : name
    })
    req.session.token = token;
    res.render("page2")
})
// 다른곳에 로그인 했르면 로그인을 중복을 방지해주자
// 데이터베이스에 엑세스토큰능 저장하고
// 로그인을 하면 엑세스토큰을 갱신시켜주는 작업
module.exports = router;