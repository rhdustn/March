// mysql연결

// 외부모듈 설치 받아서 사용할 것
// npm모듈을 설치받는 방법

// 이번에 설치받아서 사용할 모듈을 mysql2 모듈을 설치받아서 사용할 예정

// mysql2 설치 명령어
//-----------------------------------------------------------
// npm install mysql2
// npm i mysql2
//-----------------------------------------------------------

// npm i mysql2
// 프로젝트가 실행이 안될텐데...
// 우리는 일일이 npm i mysql2 이렁ㄴ식으로 설치를 받을 필욕 없이
// package.json에 있는 dependencise이 내용의 모듈을 다 설치받는법
//-----------------------------------------------------------
// npm install 
// npm i 
//-----------------------------------------------------------
// "dependencies": {
//     "mysql2": "^3.2.4"
//   }
// ^3.2.4" ^왜 있지?
// 이버전이 없으면 다른 버전을 찾아서 설치박는다는 내용

// 실제 설치된 버전은 loc.json 에 있음

// mysql모듈도 있다. 근데 왜 mysql2 이 둘의 차이점
// mysql모듈은 콜백 기반으로 promise기반으로 사용하기 힘듬 
// mysql2를 사용할거고 mysql2가 promise기반을 지원하기 때문에 사용하기 편하다
// mysql2 사용하라고 공식문서에서도 권장을 함....

// mysql2 모듈 가져오기
const mysql = require("mysql2");

// mysql을 연결해보자.
//createConnection메서드로 연결시켜준다
// 매개변수로 연결하는 mysql의 옵션을 전달 해줘야 한다
// host : 연결할 호스트를 나타냄 root
// port : 연결할 포크 3306포트에 기본적으로 열림
// user : 사용자의 이름
// password : 사용자 비밀번호
// database : 어떤 데이터 베이스를 연결시킬건지
const temp = mysql.createConnection({
    user : "root",
    password : "kyoung2116!",
    database : "test8",
});

// // temp에 연결한 mysql객체를 반환
// // 이 객체안에는 쿼리문 작성해서 데이터베이스 쿼리 작업을 
// //query 메서드 : 쿼리문을 매개변수로 전달해서 데이터 베이스의 쿼리작업을 시킬 수 있다
// // 테이블이 있는지 확인
// // "SELECT * FROM products" : 
temp.query("SELECT * FROM products",(err,res)=>{
    if(err){
        // 테이블이 없다는 뜻
        console.log("테이블이 없음")
        const sql = "CREATE TABLE products(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(20), number VARCHAR(20), series VARCHAR(20))"
        // 쿼리문의 내용
        //  products이름의 테이블을 만드는데
        // id 컬럼은 INT숫자형
        // AUTO_INCREMENT : 자동으로 값이 증가할 수 있도록 설정 PRIMARY KEY에 주로 사용한다.
        // PRIMARY KEY : 테이블에는 고유한 값을 가지고있는 컬럼 하나 무조건 필요한데 고유한 값을 설정하는데 PRIMARY KEY로 설정한다
        // name, number, series 이런 컬럼에는 VARCHAR 문자열이고 괄호에 글자 수를 정해줄 수 있다 20자 까지 허용시켜 놓았음
        temp.query(sql);
        console.log("테이블이 없어서 만들었어")
    }else{
        console.log(res)
        console.log("테이블이 있음")
    }
})
const temp2 = mysql.createConnection({
    user : "root",
    password : "kyoung2116!",
    database : "test9",
});
temp2.query("SELECT * FROM products",(err,res)=>{
    if(err){
        // 테이블이 없다는 뜻
        console.log("temp2테이블이 없음")
        const sql = "CREATE TABLE products(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(20), number VARCHAR(20), series VARCHAR(20))"
        // 쿼리문의 내용
        //  products이름의 테이블을 만드는데
        // id 컬럼은 INT숫자형
        // AUTO_INCREMENT : 자동으로 값이 증가할 수 있도록 설정 PRIMARY KEY에 주로 사용한다.
        // PRIMARY KEY : 테이블에는 고유한 값을 가지고있는 컬럼 하나 무조건 필요한데 고유한 값을 설정하는데 PRIMARY KEY로 설정한다
        // name, number, series 이런 컬럼에는 VARCHAR 문자열이고 괄호에 글자 수를 정해줄 수 있다 20자 까지 허용시켜 놓았음
        temp2.query(sql);
        console.log("temp2테이블이 없어서 만들었어")
    }else{
        console.log(res)
        console.log("temp2테이블이 있음")
    }
})