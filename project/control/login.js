const logInCollection = require("../models/login")

exports.logIn=async function(req,res){
    const {userId,userPw}=req.body
    try {
        const data = await logInCollection.logIn(userId,userPw)
        console.log(data)
        return data
    } catch (error) {
        console.log("logIn js에러")
    }
}
