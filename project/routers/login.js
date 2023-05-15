const express = require("express")

const router = express.Router();
const {logIn} = require('../control/login')
const mysql = require("../models/config")

router.get('/',(req,res)=>{
    try {
        res.render('login')
    } catch (error) {
        console.log("login 에러")
    } 
})

// 로그인이 되는 post
router.post("/",async(req,res)=>{
// mysql로 list를 갖고오는거야
    const data = await logIn(req,res)
    try {
        res.render("list",{data})
    } catch (error) {
        console.log("login post  에러")
    }
})
module.exports = router