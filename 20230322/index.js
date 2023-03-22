// DOM 내용 추가

// 우리가 사용하는 div, p, h1 태그들

// DOM 트리

// DOM 트리의 기본 단위는 노드라고 한다. 

// 문자를 태그 사이에 넣어서 태그를 추가하는 방법
//document.querySelector('.add_class').innerHTML = "<div>태그내용</div>";

// 노드에 추가하는 방법

//createElement 태그 생성해주는 메소드

let _div = document.createElement('div');
// 여기까지 생성해서 _div 변수에 담았고
// 생성된 태그는 메모리 공간에 있는것
console.log(_div);

// 생성한 태그에 내용을 넣고
_div.innerHTML = "<p>내용이</p><div>없냐?</div>"

// 생성한 태그에 클래스도 추가
_div.classList.add("new_tag");  

// 태그를 추가하고 싶은 위치에 추가를 해줘야 트리에 추가되어 보냔다
// 원하는 위치에 추가 해주자
// 사용할 메소드가 있는데

// append() 메소드
// 태그 추가
document.body.append(_div);
setTimeout(()=> {
    document.querySelector('.add_class').append(_div);
},2000)

// append 메소드는 원하는 위치에 태그를 추가할 수 있다
// 태그참조.append (생성한 태그) = 태그 참조하고 태그의 내용으로 생성한 태그가 추가된다.

// innerHTML : 문자로 냐용이 들어가서 보안이 좀 취약
// append : DOM 트리의 노드이기 때문에 보안이 좋다. 문제가 없다. 태그작업을 세분화 가능하다

// 태그의 내용확인
console.log(_div.innerHTML);

// 태그의 내용에서 문자만 가져오고 싶으면?
// inneText 
// 태그 사이의 문자만 가져온다+
console.log(_div.innerText);

// button 태그 생성
let _button = document.createElement('button');
_button.innerHTML = "눌러봐";
// 태그를 만들고 우리가 사용하는 것처럼 그대로 사용하면 되고
// 내용을 추가해준 다음 원하는 위치에 태그를 넣어주면 된다. 

_button.onclick = function(){
    // 태그를 제거해보자
    //_div.remove();
    //remove()메소드가 _div를 제거해준다 
    // 원하는 태그를 제거할 수 있다

    // 태그의 자식태그도 제거할 수 있다.
    // 태그의 자식태그는 removeChild 메소드를 사용
    //let _div2 = document.querySelector('');
    console.log(_div);
    //document.body.removeChild(_div);
    // _div 테그를 body내용에서 찾아서 제거 해준ㄷ가
}

document.body.append(_button);

// onclick 이렇게 이벤트 명으로 직접 함수를 대입해서 추가하는 방법
// 함수를 덮어씌운다.
// 또 다른 방법이 하나 더 있다.

// 이벤트를 구독시킨다
// onclick => 온만 뺴면 된다
// onscroll = >on만 빼고 scroll
// addEventListener 메소드의 매개변수로 "구독할 이벤트 이름"
// 두번째 매개변수

_button.addEventListener("click", function(){
    console.log("나 클릭 구독중")
})
_button.addEventListener("click", function(){
    console.log("나도 구독중")
})

// addEventListener 메소드는 이벤트를 누적시킬 수 있다. 추가가 가능하다는 얘기
// onClick 은 이벤트를 덮어쓴다

_button.onclick = function(){
    console.log("나 onclick 이벤트")
}
console.log(_button.onclick);

_button.onclick = function(){
    console.log("나 onclick 이벤트2")
}
_button.onclick = function(){
    console.log("나 onclick 이벤트3")
}
console.log(_button.onclick);

// 이벤트들 뭐있나?

// load - 페이지와 기타 요소들의 그릴 준비 로딩이 끝났을때
window.onload = function(){

}
// load 이벤트 구독
// addEventListener("이벤트의 타입, 함수의 내용")을 사용해서
// 이벤트를 구독해 놓는다
window.addEventListener('load', function(){
    // load 이벤트가 실행되면 내용 실행
});

// onresize : 브라우저의 창 크기가 바뀌면 실행되는 이벤트
window.onresize = function(){
    console.log("창 사이즈 변환");
}

// window.addEventListener("resize",function(){

// })

// scroll : 사용자가 태그나 페이지에서 스크롤 했을때.스크롤 값이 없으면 동작하지 않는다

//  태그의 이벤트로 원하는 이벤트를 구독하면 태그에서 그 이벤트가 발생할 때 실행된다  

// 여기는 우리가 생성한 태그에서 scroll 이벤트에 구독
_div.onscroll = function(){
    // 스크롤 이벤트가 실행되면 우리가 추가할 기능
    console.log('나 스크롤 되고 있니');
}

// 여기는 body태그에서 scroll 이벤트에 구독
document.body.onscroll = function(){

}

// 키보드 이벤트들

// onkeydown : 사용자가 키보드를 눌렀을때 누르자 마자(누르고 땐게 아니라 누르자 마자)
window.onkeydown = function(){
    //console.log("나 키보드 누르자 마자");
}

// onkeyup : 사용자가 키보드를 누르고 있다가 땠을때
window.onkeyup = function(){
    console.log("키보드를 누르다가 땠어");
}

// onkeypress : 키보드를 누르고 있을때 (키를 누르고 있으면 계속 실행)
window.onkeypress = function(){
    console.log("키보드를 누르고 있는 동안");
}
// 필요한 때가 있나? 
// onkeydown하는 순간 동작할 기능 하나
// 기능 둘 누르고 있는 동안 발생시킬 기능 onkeypress

// 마우스 이벤트
// click : 사용자가 해당 태그를 클릭했을때 발생하는 이벤트
window.onclick = function(){
    //console.log('나 클릭');
} 

//dbclick : 더블클릭 했을때 실행되는 함수
window.ondblclick = function(){
    console.log('더블 클릭');
}

// mousedown : 마우스를 누르자 마자 실행되는 이벤트
window.onmousedown = function(){
   // console.log("마우스키 다운");
}
// mouseup : 마우스를 누르다땠을때 실행되는 이벤트
window.onmouseup = function(){
    //console.log("마우스키 업");
}
// onmousedown,onmouseup
// 마우스 키를 누르고 이동한 뒤 키를 땟을때 좌표로 계산해서 동작해야하는 기능을 만들때 사용

// mousemove : 마우스가 태그 위에서 이동되는 동안 
window.onmousemove = function(){
    console.log("마우스 이동중 입니다");
}
let _box = document.querySelector(".box");
// mouseenter : 마우스를 태그위로 올려졌을때 실행되는 이벤트
// hover 같음 
_box.onmouseenter = function(){
            console.log("마우스  올려짐");

}

// mouseleave : 마우스가 태그 위에서 나갔을때 실행되는 이벤트
// hover 같음
_box.onmouseleave = function(){
    console.log("마우스 나감");

}
// 기능을 hover 처럼 추가할 수 있겠구나

// 개발할 때 pc, 모바일 이렇게 웹을만들텐데
// 모바일 환경에서 실행되는 이벤트

// 모바일 터치
// touchstart : 화면을 터치한 순간 
window.ontouchstart = function(){
    //console.log("모바일 터치됬어")
}

// touchend : 화면을 터치하다 때면
window.ontouchend = function(){
    //console.log("모바일 터치하다가 땠어")
}

// touchmove : 화면을 터치하고 이동할 때
window.ontouchmove = function(){
    //console.log("터치하고 이동중")
}

// 이벤트를 좀 알아밨는데
// 이벤트 실행됭때 매개변수로 해당 이벤트의 내용이 전달 됩니다
// click의 이벤트를 보자
_box.onclick = function(event){
    // 이벤트의 내용들 이벤트 실행ㄷ죄면 이벤트의 내용이 값으로 넘어온다

    console.log(event);
    // 해당 이벤트가 일어난 타겟
    // 지금은 window 에 click 이벤트가 일어나면 실행되는 기능을 실행
    // 클릭된 태그를 가져온다
    console.log(event.target);

}

// 마우스의 위치를 가져와봐야겠다
window.onmousemove = function(e){
    // 타입이 뭐지?
   // console.log(e.type);
    //해당 이벤트 일어나면 마우스의 좌표 X 값
    // 좌표값은 픽셀 단위다
    // 0~브라우저 너비 크기
    //console.log(e.pageX);
    // 이벤트 발생시 마우스 좌표 Y 값
    // 0~브라우저 높이
    //console.log(e.pageY);

}

// 키보드 입력
window.onkeydown = function(e){
    // e.keyCode 
    console.log(e.keyCode);
    // ascii 코드 : 숫자로 표현된다
    //A 를 입력하면
    if(e.keyCode == 65)
    {
        console.log('A키를 입력받음')
    }
}

// 기본 동작을 취소하는 방법
let _button2 = document.querySelector(".btn_class");
_button2.onclick = function(e){
    // 기본 동작이 제거된다
    // 브라우저 상에서 기본 동작되는 기능을 제거할 수 있다.
    e.preventDefault();
}
