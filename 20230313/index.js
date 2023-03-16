console.log("주말 잘 쉬었니? 공부는 하셨나요?")

for(let i =0; i<10; i++){
    if(i % 3 == 0){
        console.log(i)
        console.log("주말 잘 쉬었니? 공부는 하셨나요?")
    } 
}

//컴파일 언어와 인터프리터 언어
// 개념

//컴파일러 언어 : 프로그램 코드를 컴파일 해서 컴퓨터가 알아들을 수 있는 기계어로 번역해준다.
//소스코드 전체를 함번에 번역하고 실행 파일을 만즐어서 실행해 준다
//장점 : 파일의 크기가 큰데 실행속도가 빠르다. 
//실행하기 전에 전체코드를 번력해서 오류를 미리 알 수 있다.
//대신 번역 과정 시간이 좀 걸린다.
//c, c++, java, python 등등 

//인터프린터 언어 : 프로그램 코드를 한줄씩 읽으면서 번역과 실행을 한다
//장점 :  프로그램 실행 중 동적으로 소스코드를 실행해서 수정이 가능하다
//소스코드 크기가 작고 소스코드의 수정이 용이하다 그래서 디버깅 하기 편리하다
// 소스코드가 실행될때마다 번역과 실행을 반복해서 속도는 좀 느리다
//오류를 실행중에 발견할 수 있다
/// javascript 등등

// 논리연산자 ||. &&
/*
    || 논리형(OR)

    a || b --> a와 b중 하나라도 참이면 참이나온다
    0    0 --> false
    1    0 --> truec
    0    1 --> false
    1    1 --> true

    && 논리곱(AND)
    a && b --> 둘다 참이여야 참
    0    0 --> false
    1    0 --> false
    0    0 --> false
    1    1 --> true
*/
let a = false;
let b = true;

console.log(a||b);
console.log(false || false);
console.log(true || false);
console.log(false || true);
console.log(true || true);

let c =true
let d = true
console.log(c && d);

let text = "집에 가고싶다"
let age =1;
//true && false
console.log(age= 20)
if(text==="집에 가고싶다" && age === 20){
    console.log("집에도 가고 나이도 20이야")
}
// 상항 연산자
//한줄로 코드를 표현할 수 있다. 잘쓰면 편한데 가독성이 많이 떨어진다. 최소 2반까지만 사용하자

// 조건 ? (앞의 조건이 참일때) : (앞의 조건이 거짓일때)
console.log(1 > 2 ? "이건 참이야" : "이건 거짓이야")

//조건문 if 반복문 for
//switch 조건문
// switch ("값을 여기에 넣으세요") {
//     case 1: // if 부분
        
//         break;
//     case 2: //else if
//         break;
//     case 3: //else if
//         break;
//     case 4: //else if
//         break;
//     default: //else
//         break;
// }

let month =10;
let monthName ="";
switch (month) {
    case 1:
        break;
    case 2:
        break;
    case 3:
        break;
    case 4:
        break;
    case 5:
        break;
    case 6:
        break;
    case 7: 
        break;
    case 8:
        break;
    case 9:
        break;
    case 10:
        monthName = "October";
        // 여기가 동작괴는 이유는 10case 부터 실행 시키는데
        // break 문이 있기 때문에 여기만 실행된다
        // break 문이 없으면 10case 에 들어와서 및으로 break 문이 있을때까지 실행
        break;// break 문이 있는데 이게 뭐지
    case 11:
        //값이 11이니까 여기를 실행
        monthName = "November";
        break;
    case 12:
        break;

    default:
        break;
}
console.log(monthName)

switch (2) {
    case 1:
        console.log("첫번째 case 문")
        //break;
    case 2:
        console.log("두번째")
        //break;
    case 3:
        console.log("세번째")
        //break;
    default:
        console.log("여기까지가 끝")
        break;
}

//while 반복문 무한히 돌아간다
//while ("값이 true 무한으로 돌아간다.false 값을 변경해주어야 반복문이 멈춘다")
// break 문으로 반복을 종료시켜줄 수 있다.
// while(true){
//     if("멈추는 조건"){
//         break; //조건이 맞았을때 반복을 끝내준다
//     }
// }

// let num =1;
// while(num !== 5){
   
//     console.log(num); 
//     num++;
// } 

// let num2 =1;
// while(true){
//     console.log(num2); 
//     num2++;
//     if(num2 === 5)
//     {
//         break;
//     }
// } 
// 사용자가 브라우저에 값을 간단히 입력 받을 수 있는 상태창을 띄워준다
// let value =prompt("자 값을 입력해 보시오")
// console.log("value :" , value)

// let inputNum = prompt("첫번째 숫자입력")
// let inputNum2 = prompt("두번째 숫자입력")


//prompt 에 입력받을건 문자역
//숫자로 현채를 변환시켜주는 작업이 필요
//현채를 변환시켜주는 함수를 사용야한다
// 형변환 
//parseInt("숫자로 정수로 변경할 변수나 값")
//Number("똑같다.. 숫자로 병경할 변수느 값")
// 다른 형채의 type 을 number type 으로 형변환 시킨다

// let result = parseInt (inputNum) + Number (inputNum2);

// console.log("결과는 두구두구두구 ~" , result)

// let value =prompt("너는 숫자를 입력해야해 1~5 사이의 ");
// let play = true;
// while(play){
//     switch (value) {
//         case "1":
//             console.log("1번 눌렀네 집에 가")
//             play = false
//             break;
//         case "2":
//             console.log("2번 눌렀네 집에 가")
//             play = false
//             break;
//         case "3":
//             console.log("3번 ")
//             play = false
//             break;
//         case "4":
//             console.log("4번")
//             play = false
//             break;
//         case "5":
//             console.log("5번 ")
//             play = false
//             break;
//         default:
//             console.log("1~5 누르라고")
//             value =prompt("1 ~ 5 를 누르라고 했지?");
//             break;
//     }    
// }

//어럽다 연습 필수 .. 모두가 거쳐가는 연습
//가위바위보 컴퓨터랑 가위바위보
//3개중에 선택을 할 수 있는데 텀퓨터는 자동으로 어떨게 선택?

//자바스크립트에서 랜덤값을 구할 수 있는 친구
Math.random(); // 0~1까지 랜덤 수
//parseInt()  이 친구를 사용해서 전수로 변환을 하고 값이 너무 작으니까 곱해줘냐한다
//0~100
//1. 컴퓨터 랜덤값이 잇어야 한다  Math.random
// 2.사용자의 입력값을 변수에 저장해놓아야 한다
//3. 다른 값을 입력하면 다시 ㅂ반복
// 조건문 switch
// console.log (parseInt(Math.random() *3));
// 가위 =0
// 바위 = 1
// 보 = 2

let value =prompt("가위, 바위, 보를 입력하세요")
let com = (parseInt(Math.random() *3))
let play = true;
while(play){
    switch (value) {
        case "가위":
            if(com == 0){ 
                console.log("비겼습니다")
            }else if(com==1){
                console.log("졌습니다")
            }else{
                console.log("이겼습니다")
            }
            play = false
            break
        case "바위":
            if(com == 0){ 
                console.log("이겼습니다")
            }else if(com ==1){
                console.log("비겼습니다")
            }else{
                console.log("졌습니다")
            }
            play = false
            break
        case "보":
            if(com == 0){ 
                console.log("졌습니다")
            }else if(com == 1){
                console.log("이겼습니다")
            }else{
                console.log("비겼습니다")
            }
            play = false
            break
        default:
            console.log("가위, 바위, 보만 입력하세요")
            value =prompt("가위, 바위, 보만 입력 please")
            break;
    }
}
