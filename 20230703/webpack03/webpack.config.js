const path = require("path")
// html-webpack-plugin
// html 파일을 만들어줌
// 애플리케이션에 포함된 번들을 관리하는 프로세스를 만들어 준다
// 주로 react 같은 애플리케이셩 작성할때 주로 사용
// spa 싱글페이지 애플리케이션

const HtmlWebpackPlugin = require("html-webpack-plugin");

// webpack 구성객체 내보내기
module.exports ={
    // 개발모드 설정 // 빌드할때 시간을 최적화단계를 건너뛰고
    mode : "development",
    // 진입 시작점
   entry : "./src/index.js",

   // 모듈의 규칙
   module : {
    rules :[
        {
            // test :.js, .jsx 확장자를 가징 파일에 대한 규칙을 설정
            test : /\.(js|jsx)$/,
            // node_modules 폴저를 제외하고 파일처리
            // exclude 제외할 폴더
            exclude : /node_modules/,
            // babel-loader를 이용해서 파일을 번들링한다
            use :["babel-loader"],
        }
    ]
   },

   // 플러그인 설정
   plugins : [
    // HtmlWebpackPlugin을 사용해서 index.html 번들링 폴더에 생성
    new HtmlWebpackPlugin({
        template :"src/index.html",
        filename : "index.html"
    })
   ],
   // 번들링 냅낼 속성
   output :{
    // 번들파일 이름
    filename : "bundle.js",
    path : path.join(__dirname,"dist")
   }
}