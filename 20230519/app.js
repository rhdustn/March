// 시퀄라이즈 ORM (객체 관계 매핑)
// 객체와 데이터 베이스를 ORM 라이브러리가 매핑을 시켜주어서 자바스크립트 SQL을 제어할 수 있다.
// 자바스크립트로만 sql 작업을 할 수 있도록 도와주는 라이브러리.

// 설치할 모듈 express ejs sequelize mysql2
// 서버 객체 만들고
// 서버 대기상태

const express = require("express")
const path = require("path")
const dot = require("dotenv").config()
const app = express()
const {sequelize,User,Post} = require('./models')

app.set("views",path.join(__dirname,"page"));
app.set("view engine","ejs")
app.use(express.urlencoded({extended:false}))

// 시퀄라이즈 구성 연결 매핑
//sync 함수는 데이터 베이스를 동기화 시켜주는 메서드
// focus : 초기화 시킬지 안시킬지의 여부를 설정한다
sequelize.sync({force : false})
.then(()=>{      
    // 열결성공
    console.log("연결성공")
}).catch((err)=>{
    // 열결실패
    console.log(err)
})

app.get("/",(req,res)=>{
    res.render("create")
})

app.post('/create',(req,res)=>{
    const {name, age, msg} = req.body
    // create insert 문을 실행시켜주는 메서드
    // 매개변수로 컬럼의 내용을 객체로 만들어서 전달
    User.create({
        // name 컬럼의 값
        name : name,
         // age 컬럼의 값
        age : age,
         // msg 컬럼의 값
        msg : msg
    })
    res.send("값 추가되었음")
})

app.get('/main',(req,res)=>{
    // 유저 전체 조회
    // findAll 메소드에 매개변수로 검색 조건을 객체로 추가할 수 있다.
    // select * from User 한거랑 같음
    User.findAll({})
    .then((e)=>{
        //성공시
        res.render("main",{data : e})
    })
    .catch((e)=>{
        res.send("유저조회 실패")
    })
})

app.post('/create_post',(req,res)=>{
    const {name,value}=req.body
    console.log(name,value);
    // findOne 한개의값을 조회하는 메서드
    User.findOne({
        where : {name : name}
    }).then((e)=>{
        Post.create({
            msg : value,
            user_id : e.id
        }) 
    })
    res.send();
})

app.get('/view/:name',(req,res)=>{
    // 해당 유저를 조회하고 가지고 있는 글을 볼꺼임
    User.findOne({
        where : {
            name : req.params.name
         },
         // raw 속성을주면 관계형으로 불러온 값을 다 풀어서 볼수가 있다
         // raw : true,
         // 해당 유저의 id로 참조된 user_id 사 있는 post 테이블의 값을 같이 조회한다
        include : [
            // 조회할 모듈 post 모델
            {model : Post}
        ]
    }).then((e)=>{
        console.log(e)
        e.dataValues.Posts = e.dataValues.Posts.map((i)=>i.dataValues);
        const Posts = e.dataValues;
        console.log(Posts)
        res.render("view",{data : Posts})
    })
})

app.listen(8080,()=>{
    console.log("서버 열림")
})