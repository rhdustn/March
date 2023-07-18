const router = require("express").Router()
const {Login} = require("../controllers/loginContoller")

router.get("/login",(req,res)=>{
    res.render('login')
})

router.post('/login',Login);

module.exports = router