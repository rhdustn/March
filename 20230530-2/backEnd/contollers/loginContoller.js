const {User} = require("../models")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { where } = require("sequelize");

exports.Login = async(req,res)=>{
    try {
        const {user_id,user_pw}=req.body;
        const user = await User.findOne({where:{user_id}});
        if(user==null){
            return res.send("회원가입을 해주시길 바랍니다")
        }
        const same = bcrypt.compareSync(user_pw,user.user_pw);
        if(same){
            let token = jwt.sign(
                {
                    id : user.id,
                    name : user.name,
                    user_id:user.user_id,

                },
                process.env.ACCESS_TOKEN_KEY,
                {
                    expiresIn :"20m",

                }
            );
            req.session.access_token=token
            return res.redirect("http://127.0.0.1:5501/frontEnd/main.html")
        }else{
            return res.send("비밀번호가 틀렸습니다")
        }
    } catch (error) {
        console.log(error)
    }
}
exports.ViewUser = async(req,res)=>{
    try {
        const {access_token}=req.session;
        const data= jwt.verify(access_token, process.env.ACCESS_TOKEN_KEY,async(err,decoded)=>{
            if(err){
                console.log(err);
                res.send("다시 로그인 해주세요")
            }
            
            const user = await User.findOne({where:{user_id:decoded.user_id}})
            console.log("나 잘빠져나감!");
            console.log(user);
            res.json(user)
        })
       

    } catch (error) {
        console.log(error)
    }
}

exports.UploadUser = async(req,res)=>{
    try {

        const {file} = req;
        console.log(req)
        const {access_token}=req.session;
        const data = jwt.verify(access_token,process.env.ACCESS_TOKEN_KEY, async(err,decoded)=>{
            if(err){
                res.send("다시하세요")
                console.log(err)
            }
            const img = await User.update({img:file.filename},{where:{user_id:decoded.user_id}}) 
        res.send('굳')
    })
    } catch (error) {
        console.log(error)
    }
}