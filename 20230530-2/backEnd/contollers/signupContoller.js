
const {User} = require("../models");
const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");

exports.signUp = async(req,res)=>{
    try {
        const {user_id,user_pw,name,img}=req.body
        console.log(user_id)
        const user = await User.findOne({where :{user_id}})
        if(user!=null){
            return res.send("중복 회원 가입 입니다");
        }
        const hash = bcrypt.hashSync(user_pw,10);
        await User.create({
            name,
            user_id,
            user_pw: hash,
            img
        })
        res.redirect("http://127.0.0.1:5501/frontEnd/login.html")
    } catch (error) {
        console.log(error)
    }
}