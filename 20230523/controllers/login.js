const {User} = require("../models")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const { post } = require("../routers/signUp");

exports.login = async(req,res)=>{
   try {
    const {user_id,user_pw}=req.body;
    const users = await User.findOne({where:{user_id}})
    if(users==null){
        return res.send("회원가입을 하시고 로그인을 해주세요")
    }
    const same = bcrypt.compareSync(user_pw,users.user_pw)
    if(same){
        if(users.grade==0){
          return res.send("관리자 승인이 필요함")
        }
        let token = jwt.sign({
            id : users.dataValues.id,
            name : users.dataValues.name,
        },process.env.ACCESS_TOKEN_KEY,{
            expiresIn :"10m"
        });
        req.session.access_token = token
        res.redirect("/board")
    }
    else{
        res.send("비밀번호를 다시 입력해 주세요")
    }
   } catch (error) {
    console.log(error)
   }
};