const mysql = require("./config")

exports.tableInit2 = async () =>{
    try {
        await mysql.query("SELECT * FROM board")
    } catch (error) {
        // 0518 한거
        await mysql.query("CREATE TABLE board(id INT AUTO_INCREMENT PRIMARY KEY,title VARCHAR(20),content VARCHAR(100),userID INT); ALTER TABLE board ADD CONSTRAINT fk_user FOREIGN KEY (userID) REFERENCES users(id);")
    }
}

exports.boarderInsert = async (title,content,userID)=>{
    try {
        await mysql.query("INSERT INTO board(title,content,userID) VALUES(?,?,?)",[title,content,userID])
    } catch (error) {
        console.log(error)
    }
}
// 게시판 select

exports.boarderSeclet = async()=>{
    try {
    //  const [data]= await mysql.query("SELECT * FROM board")
    const [data]= await mysql.query("SELECT board.userID ,users.user_name,board.id,title,content FROM board INNER JOIN users ON board.userID = users.id")
    const [userdata]= await mysql.query("SELECT * FROM users")
        return {data,userdata}
    } catch (error) {
        console.log(error)
    }
}

exports.detailBoard = async(id)=>{
    try {
        const [data] = await mysql.query("SELECT * FROM board WHERE id=?",[id]) 
        return data[0]
    } catch (error) {
        console.log(error)
    }
}

// 글 수정
exports.update = async (id,title,content)=>{
    try {
        await mysql.query("UPDATE board SET title=?,content=? WHERE id=?",[title,content,id])
    } catch (error) {
        console.log(error)
    }
}

exports.delete1 = async(id)=>{
    try {
        await mysql.query("DELETE FROM board WHERE id=?",[id])
    } catch (error) {
        console.log(error)
    }
}


