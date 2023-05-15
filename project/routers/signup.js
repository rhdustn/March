const express = require("express")

const router = express.Router();
const {SignUp} = require('../control/signup')

router.get('/',(req,res)=>{
    try {
        res.render('signup')
    } catch (error) {
        console.log("signup 에러")
    }
})
 // 회원가입 요청이 들어오면
 router.post("/",async(req,res)=>{
    const data = await SignUp(req.body.user_id,req.body.user_pw,req.body.user_name)
    try {
        res.render('main')
    } catch (error) {
        console.log("signup post  에러")
    }
 })   
module.exports = router
