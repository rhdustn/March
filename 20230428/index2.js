// mysql설치
//workbench 편하게 gui로 조작해거 추가가 가능하다

//cli 좀 작성을 해보고 넘어간다

// mysql 접곳하는 방법
// mysql -u root -p
// c드라이브 -> 프로그램 
// 환경변수 설정을 해보자

// 새로만들기 C:\Program Files\MySQL\MySQL Server 8.0\bin 경로 입력해주기

// 쿼리문은 데이터베이스에 추가 수정 삭제를 할 수 있는 명령어
// 쿼리문을 사용하면 데이터베이스에서 원하는 데이터를 가져오기 위해서
// 사용하는 명령어

// 현재 있는 데이터베이스들을 확인하는 쿼리문
// -----------------------------------------
// show databases;
// ---------------------------------------

// 데이터 베이스를 추가해주는 쿼리문
//------------------------------
//CREATE DATABASES (데이터베이스의 이름) CHARCTER SET utf8
//---------------------------------

// 사용할 데이터 베이스 선택하는 쿼리문
//use (데이터 베이스의 이름)
//------------------------------

// 테이블이라는 곳에 저장을 한다
// 유저의 테이블도 있을것이고
// 개사펀에 대한 테이블이 있을것이다
// 이거는 유저의 내용만 담을 객체

// 테이블 추가
//-------------------------------------
// CREATE TABLE (TEST).(테이블의 이름)(
//     id INT NOT AUTO_INCREMENT PREMARY KEY,
//     content VARCHAR(255) NOT NULL
// )
//---------------------------------------
// CREATE TABLE test3.aa(
//     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
//     content VARCHAR(255) NOT NULL
// )
// 테이블의 리스트 확인
//--------------------------
// show tables;
//----------------------
// 테이블 확인 쿼리문
//------------------------------
//SELECT * FROM aa

//-----------------
// 테이블에 내용ㅇ,ㄹ 추가해보자
// INSERT INTO(데이터베이스 이름).(테이블 이름)('ID','content') VALUES('1', '안녕~')
//  INSERT INTO.test3.aa(id,content) VALUES('1', '안녕~');

