// todo list 만들기

const express = require("express")

const mysql2 = require("mysql2")

const path = require("path")
const app = express();

const _mysql = mysql2.createConnection({
    user : "root",
    password : "kyoung2116!",
    database : "test3",
    multipleStatements : true
})

app.set("views",path.join(__dirname,"todo"))
app.set("view engine","ejs")

app.use(express.urlencoded({extended : false}));

// 메인페이지
app.get("/",(req,res)=>{
    const sql = "SELECT * FROM todo";
    _mysql.query(sql,(err,result)=>{
        res.render("main",{data : result})
    })
})

//add page
app.get("/add",(req,res)=>{
    res.render("add")
})
app.post("/add",(req,res)=>{
    const {date,work,memo} = req.body;
    const sql = "INSERT INTO todo (date,work,memo)VALUES(?,?,?)"
    _mysql.query(sql,[date, work,memo],(err)=>{
        res.redirect("/")
        console.log(err)
    })
})
// 삭제
app.get("/delete/:id",(req,res)=>{
    const sql = "DELETE FROM todo WHERE id = ?; SET @CNT = 0; UPDATE todo SET todo.id = @CNT:=@CNT+1; ALTER TABLE todo AUTO_INCREMENT = 0;";
    _mysql.query(sql,[req.params.id],()=>{
        res.redirect("/")
    })
})

// 수정
app.get("/edit/:id",(req,res)=>{ 
    const sql ="SELECT * FROM todo WHERE id = ?"
    const id = req.params.id
    _mysql.query(sql,[id],(err,result)=>{
        res.render("edit",{data : result[0]})
    })
})
app.post("/edit/:id",(req,res)=>{
    const {date, work, memo}=req.body
    const sql = "UPDATE todo SET date =?, work=?, memo=? WHERE id=?"
    const id = req.params.id
    _mysql.query(sql,[date, work, memo,id],()=>{
        res.redirect("/")
    })
})



const PORT = 8080;

app.listen(PORT,()=>{
    console.log("todo list 열림")
})