const mysql = require("../models/config")

const bcrypt = require("bcrypt")
const {tableInit,signup,logIn,userSelect,updateToken} = require("../models/usersModles")
const {tableInit2, boarderInsert, boarderSeclet,detailBoard,update,delete1} = require("../models/board")
const jwt = require("jsonwebtoken")
const dot = require("dotenv").config()

tableInit()
tableInit2()

const CreateHash = (password)=>{
    return new Promise((resolve, reject) => {
        bcrypt.hash(password,10,(err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}

const compare = (password,hash)=>{
    return new Promise((resolve, reject) => {
        bcrypt.compare(password,hash,(err,same)=>{
            if(err) reject(err)
            resolve(same)
        })
        
    })
} 

exports.SignUp = async (req,res) =>{
    const {user_id,user_pw,user_name}=req.body
    const data = await userSelect(user_id,user_name)
    const hash = await CreateHash(user_pw)
    if(data==undefined){
        try {
         await signup(user_id,hash,user_name)
        } catch (error) {
           console.log(error)
        }
        res.render('logIn')  
    }
    else{
        res.redirect("/signUpErr")
    }
}

exports.LogIn = async (req,res)=>{
    const {user_id,user_pw}=req.body
    const data = await userSelect(user_id)
    if(!data?.id){
        return res.send("아이디가 틀렸음")
    }
    const cp = await compare(user_pw,data.user_pw)
    if(!cp){
        return res.send("비밀번호 틀림")
    }
    const accessToken = jwt.sign({
        userId : data.user_id,
        id : data.id
    },process.env.ACCESS_KEY,{
        expiresIn : "5m"
    })
    await updateToken(user_id,accessToken)
    
    req.session.access_token = accessToken 
    console.log("여기 드러옴?")
    res.redirect("/main")
}
exports.verifyLogin = async (req,res,next)=>{
    console.log(req.session.access_token)
    const {access_token}=req.session
    jwt.verify(access_token,process.env.ACCESS_KEY, async (err,decoded)=>{
        if(err){
            res.send("다시 로그인 하세요")
        }else{
            // 중복로그인 방지
            console.log("여기 토큰")
            const data = await userSelect(decoded.userId);
            if(data.token !== access_token){
                res.send("중복 로그인 방지 입니다")
            }else{
                next();
            }
        }
    })
}

exports.BorderInsert = async(req,res)=>{
    const {title,content}=req.body
    let userId = 0
    jwt.verify(req.session.access_token,process.env.ACCESS_KEY, async(err,decoded)=>{
        if(err){
            console.log(err)
        }else{
            userId = decoded.id
            console.log("여기 userId")
        }
    })
   
    try {
        await boarderInsert(title,content,userId)
        res.redirect('/main')
    } catch (error) {
        console.log(error)
    }
}
exports.BoderSeclect = async(req,res)=>{
    try {
    const {data}= await boarderSeclet()
    const {userdata}= await boarderSeclet()
    console.log("control")
    return {data,userdata}
    } catch (error) {
        console.log(error)
    }
}

exports.DetailBoard = async(req,res)=>{
    const {id}=req.params

    try {
        const data = await detailBoard(id)
        return data
    } catch (error) {
        console.log(error)
    }
}
exports.UpDate = async(req,res)=>{
    const{title,content}=req.body
    const {id}=req.params
    try {
       await update(id,title,content)
       res.redirect("/main")
    } catch (error) {
        console.log(error)
    }

}
exports.Delete = async(req,res)=>{
    const{id}=req.params
    try {
        await delete1(id)
        res.redirect("/main")
    } catch (error) {
        console.log(error)
    }
}

