# tsconfig.json

- compilerOptions : typeScript 파일을 컴파일 진행시 어떤 현태로 컴파일을 진행할지 속성 정의 하는 부분
- include: 컴파인을 진행할 폴더를 지정
- exclude: 컴파일에서 제외할 폴더를 지정

## compilerOptions

- module : 모듈 시스템 지정
- outDir : 내보낼 경로 지정
- target : 번들링 문법 지정 ex) es5 es6...
- esMoudleInterop : true <br/> (import/export 문법능 자연스럽게 변경 해주는 행위) 그냥 true로 설정
(CommonJS 현식과 ES6 현식의 혼용을 자연스럽게 통합해주는 속성)
- strict: true 로 두자 엄격
- baseUrl : 모듈의 상대경로를 지정 ./src
- paths : "baseUrl" 경로를 기준으로 상대 위치를 가져오는 매핑값(경로를 변수처럼 사용한다)

```sh
npm init -y
npx tsc --init
```
```json
{
    "compilerOptions" : {
        "module" : "CommonJS",
        "outDir" : "./dist",
        "target" : "ES6",
        "esModuleInterop" : true,
        "strict" : true,
        "baseUrl" : "./src",
        "paths" : {
            "@user/*" :["user/*"]
        }
    },
    "include" : ["src/**/*"],
    "exclude" : ["**/*.test.ts"]
    // .test.ts 확장자가 붙은 파일은 모두 제외
}
```json
// package.json 추가
{
    "build":"tsc"
}
```

### 문제 경로가 @user 이 부분이 컴파일되고나서 변환이 안됐다

### tsc-alias

### 빌드시에 별칭 그대로 경로가 들어가는데 별칭 그대로 경로가 지정되어있으면 문제가 생긴다 이 별칭을 경로를 변환해주는 패키지

```sh
npm install -D tsc-alias
```
```json
{
    "build" : "tsc && tsc-alias"
}
```
