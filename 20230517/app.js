const express = require("express")
const path = require("path")
const app = express()
const signUpRouter = require('./routers/usersRouters')
const jwt = require("jsonwebtoken")
const session = require("express-session")
const dot = require("dotenv").config()

app.set("views",path.join(__dirname,"page"))
app.set("view engine","ejs")
app.use(express.urlencoded({extended:false}))

app.use(session({
    secret : process.env.SESSION_KEY,
    resave : false,
    saveUninitialized : false
}))

app.use('/',signUpRouter)


app.listen(8000,()=>{
    console.log("server on")
})