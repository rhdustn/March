// npm init
// package.json 파일을 만들어 준다
// 파일을 만들때 속성들을 입력하라고함 ..

// 메타데이터는 데이터들의 설명해주는 데이터(속성)
// 예) 책이 한권 있다고 가정하면 제목, 저자, 출판사도 있고 책의 정보

// 우리의 크로젝트의 정보를 가지고 있는 json 파일이다
// 메타데이터 설명을 가지고 있는 json 파일 초기화 명령어
// npm init
// 패키지 이름 뭐야 등등~ 질문을 해요

// 모든 설정에 기본값으로 설정하는 기본어
// npm init -y

// {
//     "name": "gg",
        // 패키지의 이름
//     "version": "1.0.0",
//      패키지의 버전
//     "description": "hello",
//      패키지의 설명 이거 무슨무슨 작업을 진행한 프로젝트다
//     "main": "main.js",
//      모듈화를 시킬때 메인 파일
//     "scripts": {
//       "test": "fnkfdnkfnd"
//     },
//      우리가 실행시킬때 스크립트ㅡ의 명령어
//     "keywords": [],
//      검색 키워그 배열의 형태로 넣어주면 된다
//     "author": "nfdknfd",
//      제작자. 패키지의 저자
//     "license": "ISC"
//      ISC 패키디의 라이선스
//   }
  
// name : 프로젝트의 이름

// version : 프로젝트의 버전

// description : 프로젝트의 설명, 문자열로 작성하면 됨

// keywords : 프로젝트를 검색할때 참조하는 키워드들을 배열로 전달해주면 된다

// author : 패키지 만든사람 작업자 정보

// license : 패키지 라이센스

// main : 이 값을 작성해주면 패키지를require 함수로 불로올때 이 파일을 불러올 수 이ㅛ게

// scripts
// npm 명령어로 실행할 수 있다 예)nmp,run test
// "scripts" : {start : node index4.js}===npm start==node index4.js