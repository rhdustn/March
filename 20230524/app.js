// 웹소켓
// 웹소켓을 사용하는 이유는
// 양방향 통신을 위해서

// 단방향으로 요청응답을 받는 구조고

// 서버에서 데이터를 푸쉬하는 경우

// 웹소켓의 장점
// 헤더의 값이 같이 넘어가는데
// 웹소켓이 없을때 한번 연결할때 헤더값을 전송하기 때문에 오버헤드
// 많은 데이터가 전송되지 않는다
// 실시간으로 채팅을 구현하거나 실시간으로 해야하는 작업이 있을경우 사용

// 가상화페 거래소 같은 경우 데이터 전송이 자주 일어나는 경우
// 웹소켓을 사용해서 구현하는게 좋다

// 효율적인 데이터 통신

// soket.io라는 라이브러리를 사용해보자.
// 페이지에서 덧글을 달았다고 가정했을때 페이지를 새로고침해야 글이 다시보이는 현상같은것
// 웹소켓으로 양방향 통신을 이용해서 실시간으로 글이 보이게 처리할 수 있다.

// express socket.io ejs
// 서버 대기
// view 엔진 경로
// view ejs

const express = require("express");
const app = express()
const path = require("path")
const socketIo = require("socket.io")

app.set("views",path.join(__dirname,"page"))
app.set("view engine","ejs")

// 유저가 접속을 하고 또다른 유저 한명더 접속을 하고
// 유저끼리 실시간 채팅을 보내볼 수 있게
app.get('/',(req,res)=>{
    res.render("main")
})

const server =  app.listen(8000,()=>{
    console.log("server on!")
})
// 대기시켜놓은 서버객체를 매개변수로 전달
const io = socketIo(server)
// 소켓이 연결이 되고

let userId = []

// 소켓들에게 이번트를 등록
io.sockets.on("connection",(socket)=>{
    // connection : 접속시 실행되는 이벤트
    // 접속한 클라이언트의 socket이 매개변수로 들어온다
    // 유저 한명이 접속했다는 얘기
    console.log("유저 접속")
    console.log(socket.id);
    // 배열에 담아 놓음 유저아이디
    userId.push(socket.id)
    console.log(userId)
    // 클라이언트 측에서 이벤트가 푸쉬되면 실행시킬 이벤트
    socket.on("hi", (data)=>{
        // to : 자기자신에게 이벤트 푸쉬
         console.log(data, "이벤트를 클라이언트에서 보냄")
        // 모든 대상에게 이벤트 푸쉬
        // io.sockets.emit("hi","모두에게")
        // 자기 제외 모든 대상에게 이벤트 푸쉬
        // 모든 대상에게 자기 제외 이벤트 푸쉬
        //socket.broadcast.emit("hi",data.msg)
        // 비밀 대화 방을 파서 채팅을 할때 하자

        // 대상에게 보낼 예정
        // 이벤트를 푸쉬할 유저의 아이디 값을 to 메서드의 매개변수로 전달
        io.sockets.to(data.id).emit("hi",data.msg);

    })
    // 유저가 나갔을때
    socket.on("disconnect", ()=>{
        // 유저가 접속을 해재했을때 실행되는 이벤트
        console.log("유저 나감");
        userId = userId.filter((value)=> value != socket.id);
        console.log(userId);
    })
})