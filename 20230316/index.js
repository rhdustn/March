// 콜백함수
// 함수도 값이라 했는데
// 함수의 매개변수로 함수를 전달해서 
// 내가 함수의 코드를 작성할 때 필요한 순간에 매개변수로 받은 함수를 실행시킨다
// 콜백함수를 만들어 보자

function test(callBack){
    console.log("1번 작업끝");
    console.log("2번 작업끝");
    console.log("3번 작업끝");

    if (true) {
        // 1+2
        console.log(callBack(1,2))
        //console.log(callBack())
        //callBack()
    }
}

function test2(a,b){
        return a+b
        //console.log(' 나는 콜백함수야');
}

test(test2);

//배열 매소드
let arr = [1,2,3,4,5];
arr.map(function(i,v){
    console.log(i);
    console.log(v);
})

//배열 매소드 map을 흉내내보자
//우리가 만든 객체
let arr2 = {
    map : function(callBack){
        //함수의 매개변수 갯수
        // 그 함수에 매개변수가 몇개 들어가나?
        // 매개변수 안받는 함수인데 매개변수 전달하면 터진다
        if(callBack.length == 1)
        {
            let a = 2;
            console.log("나는 map 함수야 매개변수를 한개받았어" + a +"결과야")
            callBack(a);
        }else if(callBack.length ==2 )
        {
            let a = 2;
            let b = 3;
            console.log("나는 map 함수야 내가 받은 콜백 함수엔 매개변수 두개를 전달받았어")
            callBack(a,b);
        }else{
            let a =8;
            let b =9;
            let c =10;
            let d =5
            console.log("나는 callback 함수야 매개변수 네개를 받았어")
            callBack(a,b,c, d);
        }
    }
} 
arr2.map(function(a,b,c, d){
    console.log("나는 콜백 함수야 전달받은 매개변수는", + a + b + c+ d + "야")
});


function temp(callBack){
    if(callBack.length ===0){
      callBack();
    }else if(callBack.length ===1){
        let temp = "사과";
        callBack(temp)

    }else if(callBack.length ===2){
        let temp = "딸기";
        let temp2 = "포도";
        callBack(temp, temp2);
    }else{
        console.log("매개변수 초과 두개만 받을 수 있어");
    }
}


function temp2(v,b){
    console.log("난 콜백함수야", v ,"를 받았어", b + "도 받았어");
}

temp(temp2);

//콜백 함수한번씩 만들고 넘어가자
// 매소드
//function 함수명 : 일반함수
// 매소드 : 객체안에 있는 함수
//객체 안에다가 함수를 만들고 콜백함수를 만들면 된다
//키값은 원하는데로 이름 지정해도 괜찮고
// 매개면수 3개 까지 받을 수 있는 함수
// 전달받은 콜백함수는 구구단을 보여주는 함수이다
// 매개변수 1개를 받으면 2단을 보여주고 2개를 받으면 2,3 단 보여주고 3개 받으면 2,3,4단 보여주고

// 객체 선언
let obj2 = {
    gugu : function(callBack){
        switch (callBack.length) {
            case 1:
                callBack(2);
                break;
            case 2:
                callBack(2);
                callBack(3);
                break;
            case 3:
                callBack(2);
                callBack(3);
                callBack(4);
                break;
        
            default:
                console.log("너 매개변수 갯수 확인해")
                break;
        }
    }
}

// 어떻게 만들어도 상관은 없지만 
//기능단위로 함수를 만드는 습관은 가지는게 좋다
function temp3(a, b, c ){
    for (let i = 1; i < 10; i++) {
        console.log(`${a} X ${i} = ${a * i} ` )
    }
}

obj2.gugu(temp3)

// 콜백 중요 오늘 정리 잘 하기 연습 공부 많이 하기

// 함수가 실행되면 스택이라는 곳에 쌓인다고 했는데
// 스택 : 후입 선출!
// 큐 : 선입 선출!

// 콜 스택 개념을 알아보자!
// 스택은 데이터를 사용하기 위해서 잠시 저장해 놓는곳
// 데이터를 쎃아놓는다 보면 된다
// 후입 선출로 마지막에 추가된 데이터 부터 제거
// 위에서 부터 짐을 꺼내는 형태처럼 보면 된다
// 함수 실행 컴덱스트 함스를 실행하게 되면 스택에 추가가 되고 반환될때 스택에 제거된다
// 함수 실행 컨텍스트 : 함수가 실행될때 마다 생성된다 함수의 실행정보를 가지고 있다. 
// 콜 스택은 함수가 실행되면 실행 컨텍스트 저장하는 스택의 구조 
// 콜 스택은 컴퓨터의 메모리 크기나 운영체제에 따라 크기가 다른다. 
// 콜 스택이 쌓이게 괴서 크기가 초과하면 스택 오버플로우 에러 발생 (더이상 실행을 할 수 없어)
// 예) 함수를 무한으로 실행할 때 나올 수 있다

// 함수를 만들어 보자
function fun1(){
    fun2();
}
function fun2(){
    fun3();
}
function fun3(){
    console.log("난 3번 안녕 마지막으로 실행한 함수야.")
}
fun1();
// 자바스크립트 코드 전체를 실행하고 전역 실행 컨텍스트가 실행되고
// fun1 함수 실행 구문에서려 fun1 함수의 실행 컨텍스트가 생성 ->
// fun2 함수 실행 컨텍스트 생성 -> fun3실행 컨텍스트 생성
// 이렇게 스택에 쌓이고 
// 마지막에 추가된 fun3 함수의 실행 컨텍스트 제거 -> fun2 함수의 실행 컨텍스트 제거
// fun1 함수의 실행 컨텍스트 제거

// 콜 스택 확인
// 확인하는 방법 : 개발자 모드 열고 f12-> 디버깅 모드 활성화(컨트롤 + f8 )
// 함수나 코드줄의 옆에 왼쪽에 코드 줄 번호에 클릭을 하면 브레이크 포인트가 찍히는데
// 포인트를 찍으면 코드가 실행되다가 그 포인트에 도달하면 잠시 실행을 멈춘다
// 재생버튼을 누르면 다음 포인트가 있는곳까지 실행하다가 멈춘다
// 직업의 디버깅도 용의하다 

// 일반함수를 알고있고 못 쓰면 계속 만들어 보는게 중요

//function 함수명(){}
// 화살표 함수
// ES6에 새로 나온 함수의 방식
// ES6 템플릿 리터럴

// 우리가 사용하던 일반함수의 모양과 다르게 생겼다.
// => 화살표 모양으로 함수를 선언
// 선언방식
let temp4 = () => {
    console.log("나는 화살표 함수야")
}
temp4();
// 화살표함수는 일반함수와 차이들이 있는데
// 함수에서 값을 반환할 때 return 식을 사용해서 반환했는데
// return 없이도 반환 시킬 수 있다.
// 함수와 같이 매개변수는 괄호에 넣으면 된다
let temp5 = () => 3* 5;

let ab = temp5(ab);
console.log(ab);

// 연결된 개념을 좀 설명 
// 제일 중요하고 큰 차이점 면접에서 질문으로 나올 수 있다.
// this라는 개념
// this 키워드 : 자바스크립트 객체를 참조하는 특별한  구문
// 일반함수와 화살표 함수의 차이는 this의 차이 this가 가르키는 대상이 다르다
// 일반함수 this : 함수가 실행될때 위치(스코프)에서 this를 가져온다.(다이나믹 스코프)
// 화사ㅏㄹ표 함수의 this : 화살표 하묘ㅜ 내부의 this 는 화살표 함수를 선언한 위치에서 this 를 가져온다
// (렉시컬 스코프)
let d = () =>{
    console.log(this);
}

let obj = {
    a : function(){
        b();
        console.log(this)
        let c = () => {
            console.log(this);
        }
        c();
        d();
    }
}

function b() {
    console.log(this);
}
obj.a();


// 전역공간에서 this를 쓰면?
// window 객체 
// BOM(브라우저 오브젝트 모델) : 브라우저를 객체 모델로 표현한 것
// BOM은 브라우저 기능들을 접근 할 수 있는 객체
// window객체
console.log(this);

// 비동기 함수
// 동기 함수

// 비동기함수는 다른 코드들과 함꼐 동기적으로 실행되지 않는다.
// 동기 ; 순차적으로 실행된다. 작업이 끝나고 다음작업 진행
// 비동기 : 순차적으로 실행되지 않고 작업을 하는 도중에 다른 작업이 가능하다
// node js 들어갔을때 개념이 더 잘잡힌다 (서버에서 값을 가져오는 작업이 비동기)(페이지가 돌아가는게 동기)

// 비동기 함수는 뭐가있을까?
// setTimeout 비동기 함수고 매개변수를 2개 받고 첫번째 매개변수가 함수
// 두번째는 시간 값을 숫자타입으로 넘겨주면 된다
setTimeout(function() {
    console.log("나는 3초뒤에 실행되고 나는 비동기 함수에서 실행됬어");
}, 3000);
console.log("나는 동기");

// let var const 꼭 사용해야 한다고 했는데
// window 객체

let a = "hello";
function temp6(){
    let b = "";
    c = "aa"
}
temp6();
// 이것도 블로그 정리 
// window 키값으로 추가된다
// 이러면 정말 큰일나고 찾을 수가 없다
console.log(window.c);
console.log(a);

console.log(c);
console.log(b);