const jwt = require("jsonwebtoken");
exports.isLogin = (req,res,next)=>{
    const {access_token}=req.session;
   jwt.verify(access_token,process.env.ACCESS_TOKEN_KEY,(err,acc_decoded)=>{
        if(err){

            res.send("다시 로그인을 해주세요",err)
        }else{
            req.acc_decoded = acc_decoded
            next()
        }
    })
}