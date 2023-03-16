// 배열 심화
// 배열 [1.2.3.4.5.6] 래퍼런스 타입
// 리스트 형태
// 인덱스의 순서로 해당 값에 접근할 수 있다
//배열은 0에서 부터 숫자를 센다
// 다른 언어에서는 c, c++, c# 등등~ 배열이 list
//javascript에서는 arr타입이 있는데 
//사용자가 편하게 접근하기 위해서 조금 허술항 부분이 있다. 
// 자바스크립트의 배열은 객체 키값이 0 1 2 3 
// 자바스크립트의 배열알의 배열은 객체배열
//예) 다른 언어 배열 안의 배열 in. t a[0][1];

//자바스크립트
let a = [[1,2,3], [4,5,6], [7,8,9]];

//우리는 이중배열이라고 부른다
//console.log(a[0]); [1,2,3]
//console.log(a[1][1]); 5
//console.log(a[2][2]); 9

// a[0] === [1,2,3]
// a[0][0] === [1,2,3]의 0번 인덱스 즉 1이 나온다
// 이중배열 까지만 사용한다. 더 만들 수 있지만 

//배열에는 length 값이 있다
// 배열의 총 길이를 알려준다
//console.log(a.length)
//배열의 인덱스 접근할 때 0~ 배열의 길이 -1
// 길이 1,2,3
// 인덱스 : 0,1,2

// 반복문에 숫자를 바로 작성하게 되면 반복문의 반복횟수를 동적으로 변경하기 힘들다
let b = [1,2,3,4,5,6,7];
// 길이가 변경되는 상황이 발생했는데
// 반복문은 7번 돌아가기 때문에
//배열의 길이가 8로 늘어나게 되면 마지막 값을 가져올 수 없다.
// 배열의 길이가 변해도 length키 값으로 배열의 길이를 가져올 수 있다
//그렇게 되면 반복문을 정산적으로 배령릐 길이만큼 반복시킬 수 있다
b.push(8);
b.push(9);
//push(8); //함수구나 배열 메소드
//배열 타입의 함수 = push
// 함수도 값
for (let i = 0; i < b.length;  i++) {
    console.log(b[i])
}

//객체 생긴거 다시보자

//const 한번 선언하면 값을 변경할 수 없다. 재선언 불가
// 상수의 값
// 객체는 키와 값이 있다
const obj = {
    a : "나는 객체야",
    //익명함수 : 이름이 없는 함수
    push : function(num){
        console.log("나는 obj 객체 안에 push라는 키 값에 있는 함수야")
        console.log(num + "를 매개변수로 받았어")
    }
}
console.log(obj.a);
obj.push(2);

let d = [1,2,3,4,5];

// 배열 인덱스에 따른 값을 구할 수 있는 함수
//return 변수명으로 쓰면 안된다

// 배얄 0~배열의 길이까지 있는데 
//배열의 값을 찾아서 위치를 리턴
let return2 = d.indexOf(1);
// 해당 값을 찾아서 배열의 인덱스를 반환한다
console.log(return2);

let arr = ["사과", "딸기", "포도"];
let return3 = arr.indexOf("딸기");
console.log(return3);

// 배열 메소드 find
// 검색할 때 사용할 함수
// 함수 반환값이 ture 나오는 함수를 넣어주고

//find라는 함수는 매개변수로 함수를 전달받는다. 
let return4 = arr.find(function(i){
    // 배열의 값이 순서대로 들어온다
    // i 매개변수에
    console.log("item" +i);
    //return 값이 ture 의 값이 반환되면 해당 아이템을 find 함수에서 반환해준다
    return i ==="딸기";
});
//ture 가 나온 첫번째 값을 뱐환한다
//값을 내보내면 함수가 종료된다.
console.log(return4)

// 배열 메소드 findIndex
let return5 = arr.findIndex(function(item){
    return item === "딸기";
})
// 해당 배열을 반복시키면서 값을 찾고 그 값의 인덱스를 반환해준다.
console.log(return5);

let str = "가나다"
console.log(str[1]);
//문자열도 인덱스로 한자한자 접근이 가능하다
 let arr2 = ['이사과', '김딸기', '이포도']
//배열 메소드 filter

let return6 = arr2.filter(function(item){
    return item[0]=== "이";
})
// filter 검색창 같은 알고리즘을 구연할 때 사용할 것 같다. 
//원하는 값을 모두 찾아서 반환해준다
console.log(return6);

// 함수 메소드 map
let return7 = arr2.map(function(item){
    console.log(item);
    //return item;
    // 반환값들을 배열의 형태로 반환해준다.
    return item[0] === "이"
})
//반환값 나오면 배열의 길이 만큼 채워서 반환 
console.log(return7);

// 매열 메소드 forEach
//해당 배열을 반복시켜서 작업해야할 경우 용이하게 사용된다
arr2.forEach(function(item){
    console.log(item);
});
//해당 배열의 길이만큼 반복하면서 값을 뽑라줍니다.
// 값을 바로 사용할 수 있다
// 아이켐을 순차적으로 뽑아준다

// for (let i = 0; i < arr2.length; i++) {
//     //증가하는 인데스를 배열의 인덱스를 줘서 확인했는데.
//     console.log(arr[i]);
// }
    
// 배열의 메소드 join
// join 함수는 매개면수로 문자열을 전달해 준다.

let arr3 = ["가", "나", "다"]
console.log(arr3.join("&"));
// 배열을 문자열로 변경시켜준다.
// 배열에 들어있는 값들의 구분을 매개변수로 전달한 문자열로 해준다

let str3 = arr3.join("-");
//split 함수
// 문자열을 배열로 변경
// split 함수의 매개변수로 문자열 값을 자를 문자값을 넣어주면 된다.
// "," 값을 매개변수로 전달하면 문자열에서 , 의 문자를 잘라서 배열의 형태로 변경시켜준다
console.log(str3.split("-"));
