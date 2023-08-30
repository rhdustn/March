// typeScript 변수 타입 지정

// 자바스크립트
// 변수명 = 초기값

// 타입스크립트
// 변수명 : 타입명 = 초기값

// node 환경에서 실행 시켜볼 수 있나?

// ts-node사용 개발 환경에서 typeScript로 작성된 코드를 실행시켜 볼 수 있다
// 기존 javaScript응 node를 통해 실행시켰는데
// typeScript는 node가 해석을 할 수 가 없기 때문에 ts-node로 실행 시켜줘해 한다

// ts-nodejs typeScrpit 실행환경(typeScript를 javaScript로 컴파일해서 실행 필요없이 node 환경에서 실행 가능)

// 1. typeScript를 컴파일 내부 컴파일러를 통해 메모리 상에 javaScript 코드로 변환
// javaScript 파일을 만들지 않는다

// 2. 컴파일된 javaScript 코드를 nodejs 런타임 환경으로 실행 그 다음 코드 실행 결과를 출력
// (타입검사로 코드에서 발생할 오류를 미리 또 알려줌)

// 설치 명령어
//----------------------------------------------------
// node.js는 javaScript 런타임 환경인데 내장 함수 및 모듈에 대한 타입 정보가 필요한데
// 그래서 node,js 타입 정보를 패키지로 설치해서 사용하자
// @types/node 이 부분
// npm install ts-node @types/node
//----------------------------------------------------

// 실행 사이드 
// js
// node app.js

// typeScript =>ts-node
// npx ts-node app.ts