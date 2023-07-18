const express = require("express");
const app = express()
const path = require("path")
const socketio = require("socket.io")



app.set("views",path.join(__dirname,"page"))
app.set("view engine","ejs")
app.get('/',(req,res)=>{
    res.render("main2")
})
const server =  app.listen(8080,()=>{
    console.log("서버 열림")
})
const io = socketio(server)

io.sockets.on("connection",(socket)=>{
    // 클라이언트 접속했을때
    socket.on("message",(data)=>{
        // 모든 클라이언트에세 이벤트 푸쉬
        io.sockets.emit("message",data)
    })
})
