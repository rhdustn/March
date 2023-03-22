// 생성자 함수
// 객체를 함수로 만들 때 많이 사용한다
// 무언가를 생성
// 객체를 생성할 떄 사용하는 함수
function createObj(_name, _atk, _def, _speed){
    this.name = _name;
    this.atk = _atk;
    this.def = _def;
    this.speed = _speed;
}
// 이런 모양으로 생성자 함수를 만들고
// 이 함수를 가지고 객체를 생성하는 방법
// 새로운 키워드 new 라는 키워드를 사용
// (동적할당)메모리공간을 동적으로 사용할 수 있게 할당해 준다
// 새로운 객체를 생성하기 위한 메모리 공간을
// new 키워드를 사용하면 빈 객체를 만들고 생성자 함수를 실행시켜서
// this 객체를 창조, this가 빈객체 
// 키값들을 추가하고 객체를 만들어 준다
// 하나의 객체를 사람이라 표현했을때 
// 사람에 대한 정보를 객체로 만들어 놓고 사람을 생성
// 물건을 생성할때도 객체에 그 물건의 정보를 키와 값으로 만들어서 하나의 오브잭트화 시킨다. 

let obj = new createObj("고블린", 100, 100, 10);
console.log(obj);
let obj2 = new createObj("트롤", 200, 100, 10);
console.log(obj2);

// 전역변수만으로 프로그램을 관리하기에는 너무 힘들기 때문에 오브젝트화 시킨다
// 개발자는 객체를 잘 다뤄야 한다.

// obj.name
// obj2.name

//  obj.name 객체의 값에 접근하는 방법
//  obj.["name"] 객체의 값에 접근하는 방법


let arr =[1,2,3,4];
arr.forEach((i)=>{
    console.log(i);
});
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
//for in
// 자동완성 했을때 object 라고 적혀있는 변수에 우리가 보고싶은
// 객체를 넣어준다

for(const key in obj){
    // 키값이 순서대로 나온다
    // 키값이 key 변수에 순서대로 담긴다
   // console.log(key);

// 이렇게 쓰면 안된다
//console.log(obj.key);
// 이렇게 작성하면 된다
   console.log(obj[key]);

}

// 눈에 변수밖에 안보
// 페이지에 자바스크립트를 이용해서 동적인 기능을 넣어보자

// BOM 브라우저 객체
// 브라우저의 기능들을 객체로 사용할 수 있게 해준것
console.log(window);

// onload 메소드는 브라우저의 랜딩이 띁나고 보여줄 준비가 괴었을때 
// 실행되는 함수 문서 랜더링을 끝내고 실행되는 함수
// window onload 라는 키값에 함수값을 전달.
window.onload=function(){
    console.log("나 다그렸어");
}

// DOM(문서 객체 모델) : 문서를 객체의 모양으로 만든 것.
// 문서의 접근을 가능하게 해준다


// DOM은 체이지에 있는 태그들을 객체로 표현한것.
// document 객체에서 태그를 선택하는 방법
// 객체를 이용해서 찾고싶은 태그를 자바스크립트로 
console.log(document)

// 태그 선택자들


//ID------------------------------------------------------------------------
//getElementById 메소드로 태그의 아이디를 찾아서 태그를 가져올 수 있다.
let div2 = document.getElementById("div1");

// 아이디 값이 있는 태그는 그냥 변수처럼 사용해도 된다
// 계속 이야기한게 아이디는 한개만 태그에 하나만 같은 아이디가 있으면 안된다

let div3 = div1;

//querySelector 만능 이 친구만 사용해도 된다
// #을 붙여서 아이디라고 알려주고 div1을 찾아줘
let div4 = document.querySelector('#div1');

console.log(div2);
console.log(div3);
console.log(div4);
//------------------------------------------------------------------------------

// class -------------------------------------------------
// class 는 변수로 사용할 수 없다 
// class는 중복 될수 있게 만들었으니까.
// 안되게 한거다
// console.log(class_div2);
let div5 = document.querySelector('.class_div2');
// 문서를 읽다가 첫번째로 발견된 태그를 하나만 가져온다.
// querySelector
console.log(div5);

// querySelectorALL 해당하는 전체 태그들을 가져온다
let divArr = document.querySelectorAll('.class_div2');
console.log(divArr[3]);
// 배열의 형태로 가져오는 구나
//----------------------------

// 태그 이름 선택자 -------------------------------------------
// querySelector 뱐수의 내용은 CSS 선택을 넣어 주는거구나
// 문자열로 넣어주면 된다
let div6 = document.querySelector('div');

// 텍스트를 태그에 넣어주고 싶어
// div1
div1.innerHTML = "<ul><li>나 태그임</li><ul>";
// div1 태그의 내용을 추가할 수 있다. <div> 여기에 내용이 추가됨</div>
console.log(div1.innerHTML);

let div7 = document.querySelector('.class_div2');
div7.innerHTML = "나 class_div2 태그중 첫번째야"

let div8 = document.querySelectorAll('.class_div2');
div8[3].innerHTML = "난 class_div2를 가진 4번째 테그야"

//---------------------
// 버튼에 기능을 넣어보자

// 버튼을 누르면 함수를 실행시켜보자
function btnFn(){
    // class_div2 클래스를 가지고 있는 태그들을 class_div변수에 배열로 담고
    let class_div = document.querySelectorAll('.class_div2');
    // 그 배열을 forEach 순회하면서 아이템을 매개변수로 받았다. 
    class_div.forEach(function(i){
        console.log(i);
    i.innerHTML = " 통일버튼 눌렀지?"
    })
}

