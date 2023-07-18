const express = require("express");
const path = require("path");
const dot = require("dotenv").config();
const {sequelize} = require("./models");
const session = require("express-session");
const app = express();
const SignUpRouter = require("./routers/signUp")
const LogInRouter = require("./routers/login")
const BoardRouter = require("./routers/board")
const AdminRouter = require("./routers/admin")

app.set("views",path.join(__dirname,"page"));

app.set("view engine","ejs");

app.use(express.urlencoded({extended : false}))

app.use(session({
    secret : process.env.SESSION_KEY,
    resave : false,
    saveUninitialized : false,
}))

app.use('/signUp',SignUpRouter)
app.use('/login',LogInRouter)
app.use('/board',BoardRouter)
app.use('/admin',AdminRouter)


sequelize.sync({force : false}).then((e)=>{
    console.log("연결 완")
}).catch((err)=>{
    console.log(err)
})

app.listen(8080,()=>{
    console.log("server on")
})