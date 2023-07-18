// 화살표함수 es6 문법
const test =(msg)=>{
    const arr =[1,2,3];
    const arr2 =[4,5,6];

    // 스프레드 연산자es6
    const arr3 =[...arr,...arr2];
    // 템플릿 리터럴 es6
    console.log(...arr3,msg)
}

test("문자 고고")