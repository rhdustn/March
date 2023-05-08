// 게시판을 만들었었는데 
// MVC 패턴
// 많이 사용하고 표준 기본적인 디자인 패턴
// 유지보수와 확장성을 고려해서 개발할 수 있다.
// 협업간의 코드의 표준화도 용이함

// MVC 패턴은 model-view-controller

// model : 데이터를 다루는 로직
// 글선택, 글 작성등등의 기능들 어플리케이션의 동작을 돤리

// view : 사용자가 볼수있는 화면의 데이터를 표시해주는 역할

// controller : model 과 view의 사이에서 동작을 제어해주는 역할
// model 의 상태를 가지고 view에 반영 시켜주는것

// 이런 패턴으로 작업을 하면 유지보수와 코드의 표준화를 유지할 수 있다

// package.json 부터 만들어보자

// 기본값으로 설정해서

// ejs 섳치
// mysql2 설치
// npm i express ejs mysql2
const express = require('express')
const postRoute = require("./routes/posts")
const path = require("path")
const app = express()

const PORT = 8000

app.set("views",path.join(__dirname,"page"))

// body  객체 사용하기 위해 미들웨어 추가
app.set('view engine',"ejs");
app.use(express.urlencoded({extended : false}))

// 정적인 파일을 모아놓은 경로를 지정 puclic 폴더로 지정
// 앞에 매개변수로 경로를 지정하ㄷ지 않았을 경우에는 기본적으로 / 루트경로로 지정한다
app.use(express.static(path.join(__dirname,"public")))

// 이렇게 지정한 경우에는 ejs 단에 css 파일명으로 접근하면 된다
// 정적 파일 경로도 나눌 수 있다
// app.use("/css",express.static(path.join(__dirname,"public")))

// postRoute객체에get 메서드로/ 루트경로 지정했을때
// ("/posts"이 경로도 추가되어서 라우팅이 된다
// 게시글을 /posts 붙어야  루트경로로 요청이 된다

app.use("/posts",postRoute);

app.listen(PORT,()=>{
    console.log("hello")
})


