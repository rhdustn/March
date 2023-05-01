// nodejs 의 Repl
// 읽기 - 해석(실행) - 출력 - 반복
// REPL(read-eval;-print- loop)
// 코드를 입력하면 즉시 실행해서 결과를 밚롼해주는 인터페이스
// nodejs의 코드를 test하고 실행할 수 있도록 해주는 대화형 콘솔

// 레포라는 모드에 들어가보자
// 터미널 창을 열고
// node만 써주면 된다
//레포모드에서 test코드를 작성해보자
const str ="hello nodejs";
console.log(str);
// 출력된 "hello nodejs 이렇게 나오고
// 함수의 반환겂이 다음으로 출력되는데
//console.log(str);이 함수의 반환값은 undefined
// 그래서 첫번째로 "hello nodejs" 두번째로 undefined
// 자바스크립트로 브라우저 창을 만들고 본째는 런타임 환경
// node의 런타임 환경
// 브라우저에서 실행하는 console.log 와 node.js에서 실행하는 console.log는
// 내용이 비슷한거지 같은 친구는 아니다.
// 브라우저에서는 this 전역갹체가 window
// node런타임환경에서 this는 전역객체가 global

// 레포모드를 사용하다가 종료하고 싶은데
// 컨트롤 +C

// node로 파일을 실행해서 응용프로그램으로 만들어보자

// 파일 실행모드
// node로 파일을 실행할때
// node 구문 뒤에 파일의 경로를 작성해 주면 된다.
// node index.js