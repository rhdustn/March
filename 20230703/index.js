// babel

// 자바스크립트 코드의 변환을 도와주는 도구
// 자바스크립트를 컴파일 해주는 도구

// 자바스크립트 문법이 진화를 꾸준히 했고 
// es5-> es6 문법이 개발되고
// es6 문법이 개발 되었는데 es5에서 개발한 것들을  모두
// 변환하기 힘들어서
// babel로 문법을 쉽게 고쳐서 쓰려고 변환 시켜준다.

// 모듈시스템

// ---------------------------commonjs =(require, moduls.exports)--//
// a.js
// const text = "하이";
// module.exports={text};

// // b.js
// const {text} =require("a.js");
// console.log(text)

//-----------------------------

// -----es6-----
// a.js
// const text = "하이";

// 1. exports{text}; 여러개를 내보낼 경우
// 2. export default test  단일로 내보랭 경우

// b.js
// 1. import{text} from "a.js";
// 2. import text from "a.js"
// console.log(text);

// babel 기본 사용법

// babel은 기본적으로 자바스크립트로 구성되어있다
// npm을 통해서 설치 가능

// 1. babel 기본 구성 설치;

// npm init -y :기본 설정 package.json
// npm install @babel/core @babel/cli @babel/preset-env

// 2. babel 의 환경구성
// .babelrc 파일 만들기
// rc = Run Commands, Run Controll 등등의 의미

/*
json으로 설정 
{
    "presets" : ["@babel/preset-env"]
}
*/

// 3. babel 실행

// npx babel [변환할 파일명] --out-file [내보낼 경로]

// npx babel app.js --out-file dist/app.js

// 2. babel02 만들고 // 모듈 시스템 변환 es5
// npm install @babel/core @babel/cli
// npm install @babel/plugin-transform-modules-commonjs

// .babelrc : "plugins" : ["@babel/plugin-trans form-modules-commonjs"]
// npx babel server.js --out-file dist/server.js

// babel 설치
// 3. babel03 만들고 // JSX문법 컴파일 해보기
//npm install @babel/core @babel/cli
// npm install @babel/preset-react

// =====webpack=====//

// babel 코드자체를 변환할때 단일파일
// webpack : 모듈 번들러 = 여러 파일을 하나의 파일로 구성해주는것

// js 1
// js 2
// js 3

// 모듈
// 모듈은 프로그램을 구성할때 구성 요소로, 관련된 데이터나 함수를 하나로 묶은 단위.

// user
// user.contoller
// user.service
// iser.view

// 번들러
// 번들러는 의존성을 가지고 동작하는 모듈 코드를 하나의 파일로 만들어 주는것

// webpack 속성
// entry : 진입점을 지정 시작점으로 사용할 모듈을 webpack에 알려줌
// output : 내보내는 번들링 방법을 결정 생성한 번들링 위치, 이름
// loaders : 번들링 중에 모듈의 소스 코드에 적용되는 자바스크립트나 css 이미지 파일을 처리
// plugins : 추가 기능 사용시 번들 최적화 html 파일 생성이나 환경변수 삽입등등
// babel 속성은 
// preset
// plugins

// webpack 기본 사용
// 패키지 설치

// npm init -y
// npm install webpack webpack-cli

// 2. 프로젝트 생성
// src 폴더를 만들거고 
// 번들링 진행을 해보자

// webpack의 설정파일
// webpack.config.js

// webpack 실행
// npx webpack

// loaders 속성을 사용해서
// 다양한 유형의 파일을 모듈화 할 수 있다.
//CSS, image 등ㄷ으을
// 번들링 해보자

// 1. package 설치
// npm install webpack webpack-cli css-loader style-loader

// 2. 프로젝트 구성
// src 폴더에 index.css, index.js 두 파일 생성

// 3.webpack.config.js 추가

// webpack plugin
// html을 만들자

// 패키지 설정
// npm install webpack webpack-cli html-webpack-plugin

// babel 설정
// .babelrc
/*
{
    "presets" : ["@babel/preset-env", "babel/preset-react"]
}
*/ 

// react 설치 react-dom
// npm i react react-dom

// 사용할것들 설치
// npm i @babel/preset-env @babel/preset-react

// npm i @babel/core babel-loader