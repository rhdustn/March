const { Update } = require("../control/post");
const mysql = require("./config");

const posts = {
    initTable : async function(){
        try {
            const [result]=await mysql.query("SELECT * FROM list")
        } catch (error) {
            await mysql.query("CREATE TABLE list(id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(20),content VARCHAR(100))")
        }
    },
    viewPostAll :async function(){
        try {
            const [result]=await mysql.query("SELECT * FROM list")
            return result
        } catch (error) {
            console.log("viewPostALL 에러남")
        }
    },
    selectPost : async function(id){
        try {
            const [result]=await mysql.query("SELECT *FROM list WHERE id=?",[id])
            console.log("게시글 : ",result[0])
            return result[0]
        } catch (error) {
            console.log("selectPost 에러남")
        }
    },
    insert : async function(){
        try {
            await mysql.query("INSERT INTO list (title,content) VALUES(?,?)",[title,content])
        } catch (error) {
            console.log("Insert에러남")
        }
    },
   delete : async function(){
    try {
        await mysql.query("DELETE FROM list WHERE id=?; SET @CNT =0; UPDATE list SET list.id=@CNT+1; ALTER TABLE list AUTO_INCREMENT=0;",[id])
    } catch (error) {
        console.log("delete 에러남")
    }
   },
   update : async function(){
    try {
        await mysql.query("UPDATE list SET title=?,content=?,WHERE id=",[title,content])
    } catch (error) {
        console.log("update 에러남")
    }
   } 
}
module.exports = posts