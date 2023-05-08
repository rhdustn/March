// 처음 프로젝트 만들었으면 이재
// npm init -y
// package.json를 기본값으로 설정해서 만들자

// 사용할 모듈 express ejs mysql path

// express 모듈 가져오고 
const express = require("express")
// 서버 인스턴스 만들어서 app 에 바인딩
// ejs 설치
// npm i ejs

// mysql2 설치
// npm i mysql2
const mysql2 = require("mysql2");
// path
const path = require("path")

const app = express();

const _mysql = mysql2.createConnection({
    user : "root",
    password : "kyoung2116!",
    database : "test4",
    // 다중 쿼리문 사용할 수 있는 옵션
    // multipleStatments : true, 
    multipleStatements : true
})

// express views 속성을 설정 (파일들의 경로)
// express에서 서버사이드 랜더링을 지원하기 위해  view 엔진을 사용한다.
// view엔진이 템플릿 파일을 보여주는 역할을 해줌
// 기본값은 C:\\Users\\고연수\\Desktop\\강의\\20230504\\views',로 경로가 지정되어있고
app.set("views",path.join(__dirname,"page"))
// console.log(app)

// view 엔진으로 ejs 사용
app.set("view engine","ejs");
// express 에서 bodyParser를 지원한다
app.use(express.urlencoded({extended : false}));

app.get('/',(req,res)=>{
    // render 메서드 view 엔진이 문자열을 html 로 브라우저에 ㅜ전달
    // 첫번쨰 매개변수: 파일의 이름
    // 두번째는 전달할 데이터
    res.render("main")
})

app.get("/signup",(req,res)=>{
    res.render("signup")
})
app.get("/login",(req,res)=>{
    res.render("login")
})

app.post('/login',(req,res)=>{
    // 요청에 개한 내용은 req객체에 들어있다.
    // body 객체 안에 들어있다 요청을 하면서 보낸 데이터
    // req.body =={user}
    const {user_id,user_pw} = req.body
    console.log(user_id,user_pw);
      // 전달받은 데이터로
    // 데이터베이스에 아이디와 비밀번호가 동일한 내용이 있는지 확인하고
    // 응답받은 데이터가 있다면
    // 사용자가 회원가입을 진행했다는 내용이니 로그인을 시켜준다
    // user_id랑 
    const sql = "SELECT * FROM users WHERE user_id =? AND user_pw = ?"
    _mysql.query(sql,[user_id,user_pw],(err,result)=>{
        if(err){
            // 로그인 실패
            res.render("mypage");
        }else{
            // 로그인 성공
            console.log(result);
            res.render("mypage",{data : result[0]});
        }
    })
    // res.send("user_id :"+user_id + "user_pw :" + user_pw);
})
// 회원가입
app.post('/signup',(req,res)=>{
    const {user_id,user_pw} = req.body;
    console.log(user_id,user_pw)
    const sql = "INSERT INTO users (user_id, user_pw)VALUES(?,?)"
    _mysql.query(sql,[user_id, user_pw],(err)=>{
        //err 있다면 에러의 내용이 들어오는 객체
        if(err){
            res.render("signUpErr");
        }else{
            // 브라우저 url을 login페이지로 변경
            res.redirect("login")
        }
    })
})
//게시판의 글 목록 페이지
app.get('/list',(req,res)=>{
    const sql = "SELECT * FROM products";
    _mysql.query(sql,(err,result)=>{
        res.render("list",{data : result});
    })
})

// 등록 페이지
app.get('/insert',(req,res)=>{
    res.render("insert")
})
app.post('/insert',(req,res)=>{
    const {name, number, series} = req.body;
    const sql = "INSERT INTO products (name, number, series)VALUES(?,?,?)";
    _mysql.query(sql,[name,number,series],()=>{
        res.redirect("/list")
    })
})
//삭제
app.get("/delete/:id",(req,res)=>{
    ///delete/:2" ==req.params = {id:2}
    // req.params = {id:2} 값을 가지고 데이터베이스에 들 조회를 해서 보여줄 수 있다
    // 글 목록기 있고 글의 아이디를 조회해서 글의 내용을 페이지에 보여줄 수 있다

    const sql = "DELETE FROM products WHERE id = ?; SET @CNT = 0; UPDATE products SET products.id = @CNT:=@CNT+1; ALTER TABLE products AUTO_INCREMENT = 0;";

    // DELETE FROM products WHERE id : 값을 제거하라는 명령어인 쿼리문
    // 테이블 products의 행에서 ? 값을 넣어줄거고
    // 우리가 넘겨준 id 값을 가지고 있는 행을 찾아서 제거시킨다

    // SET @CNT = 0 구문으로 카운트 0으로 초기화

    // UPDATE products.id = CNT:@CNT : products 테이블의 행의 아이디를 다시 갱신시켜줌 

    // ALTER TABLE products AUTO_INCREMENT = 0; : AUTO_INCREMENT 속성을 자동으로 1씩 증가시키는 속성을 0으로 변경 


    _mysql.query(sql,[req.params.id],()=>{
        res.redirect("/list");
    })
})

// 수정하는 페이지
app.get('/edit/:id',(req,res)=>{
    const sql ="SELECT * FROM products WHERE id = ?"
    const id = req.params.id
    _mysql.query(sql,[id],(err,result)=>{
        res.render("edit",{data : result[0]})
    })
})
// 수정요청
app.post('/edit/:id',(req,res)=>{
    const {name, number, series} = req.body
    const sql = "UPDATE products SET name =?, number=?, series=? WHERE id=?"
    const id = req.params.id
    _mysql.query(sql,[name, number, series ,id],()=>{
        res.redirect("/list")
    })
})



const PORT = 4000;


app.listen(PORT,()=>{
    console.log("server on!") 
})
