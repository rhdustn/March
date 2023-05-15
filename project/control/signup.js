const signupCollection = require("../models/signup")

exports.SignUp=async function(userId, userPw,userName){
    try {
        const data = await signupCollection.signUp(userId,userPw,userName)
        return data
    } catch (error) {
        console.log("signup js에러")
    }
}
