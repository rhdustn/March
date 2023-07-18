const jwt = require("jsonwebtoken")

exports.isLogin = async(req,res,next)=>{
    const {access_token}=req.session;
    console.log(req.session)
        jwt.verify(access_token,process.env.ACCESS_TOKEN_KEY,(err,decoded)=>{
            if(err){
                console.log(err);
                res.send("토큰 만료")
            }else{
                req.decoded = decoded
                next()
            }
        })  
}