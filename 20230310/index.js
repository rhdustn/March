// //우리가 제일 많이 사용할 구문
// //개발자는 객체를 잘 사용하면 된다

// //if문 비교문
// if(true){
// //여기 있는 구문을 실행시키는 조건은
// //if () 괄호안에 true 냐 false의 차이로 실핼릏 시킨다
//     console.log()
//     // 불이 꺼져있으면 실행될일 자체가 럾다. 너 괜찮니? 이거 왜써?
//     //불이 켜저있다면 시행될 수 있겠네?
// //여기에 내용을 실핼시키고 싶릉때고 있고 실행시키고 싶지 않을떄도 있는데.
// //아 괄호에다가 연산자응 넣어주면 값을 비교하면서 실핼시키거나
// //실행 안되게 할 수 있겠구나
// }

let age = 5;
let age2 = 5;

// if(age<age2){
//     console.log("내 나이가 작구나")
// }

// //false 면 실핼 시키고 싶은데
// //else if 가 아닐때 false
// if(age<age2){
//     //조건이 맞으니까 실핼
//     console.log("내 나이가 작구나");
// } else{
//     //false 면 else 문 실핼
//     console.log("나는 else 문");
// }

// //참과 거딧 말고 더 없나? 비교하고싶은데
// if(age <age2){
//     //age 보다 age2가 더 커야지 true
//     //if문이 맞으면 이코드 실행
// }else if(age ==age2){
//     //if 문이 틀리면 여기로 와서 조건이 맞는지 확인 맞으면 실핼
//     console.log("나는 else if문")
// }else{
//     //else if 문의 조건이 맞지 않으면 else실행
//     console.log("나는 두번째 else 문")
// }

//반복문 for문
//여러번 반복 실행해야할 구문이 있을때 사용한다.
// 반복문중에 하나이고

//변수 선언하고, 닶을 확인하고, for문 안에 있는 구문을 실핼하고 나서
//값을 증가시키낟
//증가시킨 다름에 비교 하고 맞으면 구문 다시 실행
//다시 실핼 후에 증가시키고 비교문 확인
//증가되다가 비교문이 false로 안맞게 되면 그때 반복문 종료
//무한으로 반복시키면 사이트가 터짐(조건식 잘 확인)
// for(let a =1;a <= b; a++ ){
//     console.log(a)
// }

// //반복문을 가지고 구구단 만들기
//수장자 호출하기
//3ㅇ,; 배수 구하기 (나머지 연산자 사용해서)
let init = 9
for (let a = 2; init >= a; a++) {
    for (let b = 1; init >= b; b++) {
        console.log(a + " x " + b + " = " + a * b)
    }
}
// let students =("가가", "나나","다다")
// let award =("가가");
// for (let student ="가가" ){
// }
let students = ["가가", "나나", "다다"]
let award = ["가가"]
for (let c = 0; c <= 2; c++) {
    if (students[c] = award) {
        console.log(award)
    }
}
let student = ["가가", "나나", "다다"]
for (let c = 0; c <= 2; c++) {
    console.log(student[c])

}

let num = 1
for (num = 1; num <= 60; num++) {

    if (num % 3 == 0) {
        console.log("짝")
    } else {
        console.log(num)
    }
}

let friends = ["이씨", "배씨", "목씨", "정씨", "김씨"]

for (let d = 0; d <= 4; d++) {
    if (friends[d] === '정씨') {
        console.log("선물을 받으실 분은" + friends[d] + "입니다");
    } else {
        console.log(friends[d] + '는 다음기회에')
    }
}
