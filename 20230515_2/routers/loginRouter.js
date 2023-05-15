const { verify } = require("jsonwebtoken")
const { LogIn, verifyLogin } = require("../controllers/usersContoller")

const router = require("express").Router()

router.get("/",(req,res)=>{
    res.render("login")
})
router.post('/',LogIn)
//로그인 상태에서 요청해야 하는 작업은
router.get("/mypage",verifyLogin,(req,res)=>{
    res.send("로그인 상태로 마이페이지 보여줄께")
}) 
module.exports = router