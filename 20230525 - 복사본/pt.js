let userId = [];
let userName = [];
const io = socketio(server)
io.on("connection",(socket)=>{
    // 유저 접속시
    console.log("유저 접속")
    // 유저 접속시 배열에 유저의 아이디를 추가
    userId.push(socket.id)
    // 현재 접속중인 유저
    console.log(userId)

    socket.on("joinRoom",(room,name)=>{
        // 방에 유저가 접속하면 
        // join 메서드로 방에 입장시킨다
        // 방의 개념
        socket.join(room);
        // 현재 방에 있는 클라이언트에게 이벤트 푸쉬
        // 어느 방에 누가 접속했는지
        io.to(room).emit("joinRoom",room,name)
        console.log(name)

    })
    //접속자
    socket.on("content2",(room,name)=>{
       
        userName.push({name,id:socket.id})
        console.log(userName)
        io.to(room).emit("content2",room,userName)
    })

    socket.on("leaveRoom",(room,name)=>{
            // 유저가 방에서 제외되게 해주고
        socket.leave(room);
            // 어느 방에서 누가 나갔는지 해당 방에 있는 클라이언트 유저들에게 이벤트 푸쉬
        io.to(room).emit("leaveRoom",room,name)
    })

    socket.on("disconnect",()=>{
        console.log("유저 나감")
        // 나간 유저를 제외한 배열을 userId에 넣고
        userId = userId.filter((value)=>value!=socket.id);
        // 현재 접속중인 유저 아이디
        console.log(userId)
    })

    socket.on("chat",(room,name,msg)=>{
        io.to(room).emit("chat", name,msg);
    })

    socket.on("chat2",(id,name,msg)=>{
        io.to(id).emit("chat",name,"귓속말 : "+msg )
    })
})