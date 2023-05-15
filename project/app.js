const express = require('express')
const postRoute = require("./routers/posts")
const routeSign = require("./routers/signup")
const routeLogin = require("./routers/login")
const path = require("path")
const app = express()

const PORT = 8080

app.set("views",path.join(__dirname,"list"))
app.set('view engine',"ejs");
app.use(express.urlencoded({extended : false}))
app.use(express.static(path.join(__dirname,"public")))

app.use("/posts",postRoute);
app.use("/signup",routeSign);
app.use("/login",routeLogin);

app.listen(PORT,()=>{
    console.log("server on!")
})