// 오늘은 함수!

// 함수는 실행할 코드들의 이름을 지어준다 (반복사용하는 기능들을 묶어서 관리한다.)
//function 함수이름() {실행시킬 코드들}
function fun(){
    console.log("fun 함수 실행됨");
    console.log("fun 함수 실행됨");
    console.log("fun 함수 실행됨");
    console.log("fun 함수 실행됨");
}
// fun 이라는 함수를 선언
// 함수 실행
fun(); // 함수를 실행 시켰다. ()를 붙여야지 함수 실행

// 함수를 실행시키면 스택이라는 곳에 함수 실행이 쌓이고 순서대로 실행이 된다.

// 변수를 배웠는데 변수들 원시타입
// 객체 배열 함수 레퍼런스 타입 (함수도 값)
// if(a <1){

// }
// console.log("")

//var let 이거 안붙이고 사용하면 안된다

//변수는 스코프라는 개념이 있는데 
// 전역 스코프와 지역 스코프 두가지 있음
//전역스코프는 말 그대로 전역 모든곳에서 접근이 가능한 범위
//지역 스코프는 특정영역에서만 접근이 가능한 범위
// 전역 스코프에 너무 많은 변수를 선언하면 관리하기가 너무 힘들어진다.
// 점근이 안된다고 너무 남발하면 안된다

//이 친구가 전역변수
let temp = "나는 전역변수야";

function con(){
    let temp = "나는 지역변수야" ;
    // 함수의 실행이 끝나면 해제 된다   
}


function con2(){
    let temp2 = "나 접근됨?"
    console.log(temp2);

}
con2(); //함수실행

// 호이스팅
// 호이스팅은 변수가 선언되기도 전에 호출했을때
// function temp2(){
//     console.log(x);
//     //지역 변수 선언
//     let x = 5 ;
//     //호이스팅이 발생하기 때문에 예상치 못한 문제가 발생할 수 있다.
//     //주의해야함! 변수는 코드를 작성할 때 최상단에 작성
// }
// //temp2();

//함수에는 매개변수 // 매개변수
function fun2(v){
    // 전달받은 매개변수를 사용
    console.log(v)
}
// 전달받은 매개변수에 따라서 작업을 다르게 하고싶을때

function fun3(num){
    console.log(`전달받은 매개변수는 : ${num}`)
}
let a = 1;
let b = 2;
fun3(a)
fun3(b)
fun3(3)

// cup 이라는 함수를 만들고 컵은 물이라든 름요수를 따를 수 이ㅛ는 기능
//cup 이라는 함수를 만들고 매개변수로 drink 음료

function cup(drink){
    // drink 라는 매개변수에 "홍차"라는 값이 들어왔다
    console.log(`${drink}를 이 컵에 따라서 마시니 기분이 좋아`);

}

let c ="오렌지 주스"
//cup("홍차")
 cup("포도주스")
// cup(c)

//전달되는 매개변수에 따라 다른 결과물을 보여줄 수 있다.

//거스름돈 자판기라는 기능을 만들어 보고싶은데 함수로 만들어 봐야겠다
//자주 사용할것갗은 기능들을 함수로 작성해 놀고 재사용

// 매개변수는 여러개 전달도 가능하다
function vending(money, unit){
    console.log(unit + "짜리" + money / unit +"개")    
}
//지폐 1000원짜리 넣고 500단위로 거슬려둬
vending(1000, 500);
vending(1000, 100);

let e = vending;
console.log(e);
//e라는 변수에 vending 함수라는 값이 들어왔디 땨문에 함수 실행식처럼 사용이 가능하다
e(1000,100);
let f = vending();// ()함수의 실행식인데.. 함수가 실행시키는건데 아게 담길까?
console.log(f);

//변수의 함수를 대입항때는 함수의 이름을 전달해야한다.

//우리가 함수를 사용할 때 함수안에서 필요한 값을 매보앨 수 있게 도와주는 식이 있는데.
//return 이라는 식이 있다. 

function ab(){
    //함수릐 실핸 도중에 return 식에 도달하면 
    //return 뒤에 작성한 값을 반환하고 함수는 종료가 된다
    return "나는 반환값이야 ㅎㅎ"
    console.log("이건 안보일꺼야 위 중레서 return 시켜서 함수가 중지되고 return 값을 내보낼꺼야")
}

let g=ab();
console.log(g)

//함수 조금 심화
function sum(num1, num2){
    return num1 + num2;
}
console.log(sum(1,2))


function gg(num){
    for (let i =1; i <10; i++){
        console.log(`${num} 단 ${num} x ${i} = ${num*i} `)
    }
}
//코드의 대사용성 높이자.
gg(3);

//성격 유형 검사지
function type(value){
    switch (value) {
        case 1:
        return "분노조절 잘해"

        case 2:
        return "과묵하지만 상냥"
            
        case 3:
        return "조용하지만 술마시먄 각오"
            
    }
}
type(1);
console.log(type(1));


// 어제 과제 하던거 그대로 이어서  오늘 복습날 했던거