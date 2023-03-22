// 생성자 함수를 만들고
let objArr = [];

function create(name, age, content){
    this.name = name;
    this.age = age;
    this.content = content;
}

// 객체를 만들 수 있다. 

function divBtn(){
    console.log("나 눌렸음");
    addArr();
    // 화면을 업데이트 하기 위해 만든 함수
    render();
}

function addArr(){
    // new 키워드로 빈 객체를 만들고
    // 함수에서 this 로 그 객체를 참조해서
    // name 키에는 값을 매개변수로 "이름"
    // age 키에는 값을 매개변수로 10
    // content 키에는 값을 매개변수로 "컨텐츠"
    // 매개변수로 전달해서 빈 객체에 키값을 추가해준다
    // obj 라는 변수에 만들어진 객체를 넣어준다


    // input 태그명을 querySelectorAl 메소드 매개변수로 전달해서
    // input 태그들을 배열로 갖와서 inputs 변수에 담아놓고
    let inputs = document.querySelectorAll("input");
    console.log(inputs);
    // input 태그는 value 라는 키 값이 있다
    // input에 입력한 값이 value 키 값으로 
    console.log(inputs[0].value);
    console.log(inputs[1].value);
    console.log(inputs[2].value);



    let obj = new create(inputs[0].value, inputs[1].value, inputs[2].value);
    objArr.push(obj);
    console.log(objArr);
    // 객체와 배열은 레퍼런스 타입이기 때문에 값이아니라 주소를 들고있다. 
    // 원시타입
    // 저렇게 보이는 현상은 일반 변수는 값을 가르키는 주소
    // 물어보고 찾아보고 공부 해야한다
    // 주소를 들고있는 개념...
    // 주소를 console 에 찍기 때문에 주소를 바라보면 마지막으로 반환 값을 확인할 수 있다. 
    // 주소는 값을 가르킨다
    // 변수명 
}
// 무언가를 그려주는 함수
function render(){
    // 랜더링 하기전에 문자열 초기화
    let text = "";
    // += 원래 있는 값에 추가를 시켜준다. 덧붙인다
    // += 5
    objArr.forEach(function(i){
        text +=`<li> 이름은 : ${i.name} 나이 :  ${i.age} 내용 :  ${i.content}</li>`
    });
    console.log(text);
    // 여기서 사용하고 끝낼꺼 text 지역변수
    document.querySelector('#tables').innerHTML = text;
}

// 페이지에 표를 만들고 ul li tkdydgotj 표를 만들고
// input 에 이름, 나이, 성별, 내용 안경 썼는지 작성하고 받고
//. 표에 추가되게 내용이
// 한줄한줄