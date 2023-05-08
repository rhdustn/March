const mysql2 = require("mysql2/promise")

// 우리가 전에 사용했던 createConnection 메서드는 콜백함수 기반
// promise를 밚환하지 않음
// createConnection : 기본적인 연결을 해주는 메서드 테스트 할때 사용한다 단일 클라이언트 접속에 용이

// 커넥션 풀을 생성하고 관리할 수 있는 메서드
// createPool 메서드로 연결을 광리할것
// promise객체를 반환해준다

//많은 클라이언트가 데이터베니스와 통신할 때 
// 요청이 많이 들어와도 성능이 유지되고 여러개의 요청을 처리하는데 좋다
// 쉽게만해서 여러명이 동시에 요청해도 성능이 유지된다

const mysql = mysql2.createPool({
    user : "root",
    password : "kyoung2116!",
    database : "test1",
    // 다중 쿼리문
    multipleStatements : true
})
// 연결확인 메소드
mysql.getConnection((err,res)=>{
    // 연결이 정상적으로 되지 않으면
    console.log(err);
    // 정상적으로 연결이 되면 res객체에 연결 인스턴스가 넘어온다
})

module.exports = mysql;