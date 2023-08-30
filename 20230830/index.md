# typeScript란?

### javascript에서 타입 검사가 확잔된 추가 언어라고 보면 된다
<br/>
### javascript에 타입이 확장됨

### typeScrpit응 javaScropt의 상위 집합 슈퍼셋(상위 확장) 대형 프로젝트를 진행할 떄 오류 검사가 쉽다

### typeScript응 객체 지향 프로그래밍에 특화된 프로그래밍 패턴을 지원하는데
<br/>

### 함수형 프로그래밍이 대세라서 타입검사나 추론등의 기능을 사용할 
<br/>


### typeScipt를 쓰면 javaScript로 작업할 때 보다 개발에서 생기는 에러를 사전에 방지할 수 있고 javascript코드의 품질과 개발 생산성을 높일 수 있다
<br/>

### typeScrupt는 런타임이 존재하지 않는다
- 컴파일러가 존재(컴파일 언어)
- typeScript => javaScript
<br/>

## 가이드
- javaScript는 타입이 정해져 있지 않아서 자동완성이 미리 뜨지 않고 일일히 어떤 값이 있는지 확인하면서 타이핑 해야하는데
- typeScript는 별칭을 통해서 자동완성 및 작성이 편하고 미리 에러를 방지할 수 있어 정확하게 작업 할 수 있다.
- typeScript로 작성한 코드를 브라우저가 해석할 수 있는 javaScript코드로 변환해서 사용(컴파일)

# typeScript 설치
```sh
# packjson 초기화
npm init -y
#개발 단계에서 사용 -D=> ---save-dev
npm init -D typescript

```
```sh
#설치가 되었는지 버전 확인
npx tsc --version
```

## typeScript의 컴파일 과정 옵션을 설정할 구 있는 파일
-tsconfig.json

```sh
#tscinfig.json 생성 명령어

# 잔소리꾼 설정된 하위 경로에 규칙이 맞지 않는 구문을 발견하면 수정하라고 잔소리함

npx tsc --init
```