const {User}= require("../models")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.Login = async(req,res)=>{    
    try {
        const{ user_id, user_pw} = req.body
        const users = await User.findOne({where:{user_id}});
        if(users==null){
            return res.send("회원가입한 유저가 아님")
        }
        const same = bcrypt.compareSync(user_pw,users.user_pw)
        if(same){
            let token = jwt.sign({
                id : users.id,
                name : users.name,
                age : users.age
            },process.env.ACCESS_TOKEN_KEY,{
                expiresIn : "5m"
            });
            req.session.access_token = token;
            res.redirect("/border")
        }else{
            res.send("비밀번호 틀림")
        }
    } catch (error) {
        console.log(error)
    }

}