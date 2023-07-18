const jwt = require("jsonwebtoken");
exports.isLogin = (req,res,next)=>{
    const {access_token}=req.session;
    jwt.verify(access_token,process.env.ACCESS_TOKEN_KEY,(err,acc_decoded)=>{
        if(err){
            res.send("로그인 다시 하셈")
        }else{
            // acc_decoded; 키를 추가해서 값을 전달
            req.acc_decoded = acc_decoded;
            // 다음 미들웨어 실행
            next()
        }
    })
}
