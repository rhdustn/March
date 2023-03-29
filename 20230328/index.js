// 스프레드 연산자

let obj = {name : 'yeon', content : "내용"};

let obj2 = obj;
obj2.name = "kim";

// 객체는 주소를 참조하는 레퍼런스 타입
console.log(obj);
console.log(obj2);
console.log(obj == obj2)


// ...스프레드 연산자 구문
let obj3 = {...obj};
// 값을 복사해서 새로운 객체를 만들어 준것
obj3.name = "kim2";
console.log(obj)
console.log(obj3);
console.log(obj == obj3);

// 스프레드 연산자를 사용하면 원본을 유지하고
// 작업을 진행할 수 있다
// 데이터베이스에서 값을 가져와서 검색기능을 만든다 가정하면
// 검색으로 걸러낸 배열만 사용하고 싶을때

// 리엑트에서많이 사용할 것
// 옵션 체이닝
// ES11레서 도입되었고
// 객체의 값을 호출할 때 안정성을 유지하면서 호출 가능하다
// 객체의 키 앞에 ? 구문을 추가해서 작성

let obj4 = {name : "yeon", content : "내용"};
//  obj4?.name
// name의 키값이 있는지 확인 없으면 undefined 를 던진다
// 오루가 나지 않게 방지해준다

// 오루가 나지 않는 이유는 객체의 키값을 확인하고 
// type 에러가 나지 않게 방지해주기 때문.

console.log(obj4?.name);

let obj5 = {
    name : "yeon",
    content : {
        age :1
    }
}
console.log(obj5?.content);
// node 환경에서 보여준다