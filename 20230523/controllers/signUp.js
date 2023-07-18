const {User} = require("../models")
const bcrypt = require("bcrypt");

exports.signUp = async(req,res)=>{
    try {
        const {name,age,user_id,user_pw}=req.body
        const user = await User.findOne({where :{user_id}})
        if(user !==null){
            return res.send("아이디가 중복됨")
        }
        const hash = bcrypt.hashSync(user_pw,10)
        User.create({
            name,
            user_id,
            user_pw : hash,
            grade : 0
        })
        const admin = await User.findOne({where :{grade:3}})
        const adminhash = bcrypt.hashSync("admin123",10)
        if(admin==null){
            User.create({
            name : "admin",
            user_id : "admin123",
            user_pw : adminhash,
            grade : 3
        })
        }
        res.redirect('/login')
        
    } catch (error) {
        console.log(error)
    }
}