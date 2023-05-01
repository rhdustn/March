// nodejs의 내장 모듈 
// nodejs에서 미리 만들어둔 모듈을 내장모듈이라고 한다
// require에서 모듈 경로와 파일명을 적는게 아니라
// 모듈의 이름만 필요

// 운영체제의 정보가 들어있는 모듈~
// 4.js
// nodejs의 내장 객체
// node의 전역 객체에는 global 객체 우리가 js에서 보던 window처럼
// 전역 객체가 있다
// 런타임 환경이 다르기 때문에 전역 객체도 다르다
// 자바스크립트에 this를 작성하고 module.exports
// 참조가 들어가기 때문에 다르지 않을까?
// 개념만 숙지하고 global객체를 사용할 일은 없다

// nodejs 모듈의 실행 컨텍스트와 전역 컨텍스트가 다르기 때문에
// nodejs에서는 모듈은 각각의 파일 스코프를 가지기 때문에 this는 모듈 자체를 가르키게 된다.

// 레포모드 켜고
//console
// global.console.log()
// global.console.time()// 코드 시작시간 매개뱐수로 해당 시작할 테스트 이름을
// global.console.timeEnd()// 코드 종료후 시간 출력 해당 끝낼 테스트 이름을 

global.console.table({a :{name : "안녕"},b :{name : "안녕2"},c :{name : "안녕3"},})

// 실행시키면 실행 파일의 이름을 보여주는 메소드
console.log(__filename);
// 실행한 파일의 디렉토리까지 보여줌
console.log(__dirname);

// 나중에 필요할때가 생기니 잘 알아둘것

// process 객체
// console.log(process.env)
console.log(process.version)// 노드의 설치버전
console.log(process.execPath)// 노드의 경로
console.log(process.cpuUsage())// cpu 사용량



