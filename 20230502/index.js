// http 요청과 응답을 좀더 편하게 사용할 있도록 도와주는 모듈
// express nodejs 에서 제일 인기가 많은 모듈
// nodeje 프레임 워크
// http 요청과 응답을 더 쉽게 작성할 수 있도록 도와준다
// 기본적인 기능만 포함하고 있어서 자유도가 높다.
// 라우팅 미들웨어 등등 개발자가 원하는 방식으로 구성할 수 있다
// 본인만의 보일러 플레이팅이 가능하다
// 봉일러 플레이팅은 반복적인 작업을 피할 수 있도록 
// 미리 개발자가 작성을 하고 개발의 생산성을 향상시킬 수 있다.
// express를 사용해보자

// 프로젝트 시작할 때 
// npm init -y

// 설치 부터 받자 express
// 설치 명령어
//-----------------------------------
// npm i express
// npm install express

const express = require("express");
const { url } = require("inspector");

// 서버 객체가 생성
const app = express();

// 메소드를 사용해서
// app.get()
// 요청의 내용이 get 메소드인지 host인지
// app.host()
// 우리가 어제한 내용 http 사용해서
// http.createServer((req,res)=>{
//     url
//     switch (key) {
//         case "/":
//             break;
//         default:
//             break;
//     }
// })

app.get('/',(req,res)=>{
    // send 메소드로 응답하고 종료
    res.send("hello nodejs");
})
app.listen(5000,()=>{
    console.log('서버 열림')
})

// packahe.json에 명령 스크립트 작성
// "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "start": "node index.js",
//     "dev": "node index.js"
//   },

// start 명령어는 ===npm start
// 별도의 네이밍으로 우리가 작성한 스크립트 명렁어 실행
// 예) dev가정하면 npm run dev 이렇게 실행하면 된다
function solution(myString) {
    var answer = answer=myString.toUpperCase(); 
    return answer;
}