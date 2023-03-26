// 쿠키랑 세션, 로컬스토리지 

// 쿠키는 많이 들어봤을건데.

// 쿠키는 해당 pc에 남아있다

// 쿠키 : 웹사이트를 방문하고 사용자의 pc에 기록할 간단한 데이터
// pc에 저장해 두었다가 값을 호출해서 사용할 수 있다.
// 브라우저가 종료되어도 남아있다

// 세션 : 브라우저가 동작되는 동안에 남아있는 데이터
// 상태같은 내용을 다룰때 사용함 예) 로그인이 되어있는 상태
// 브라우저가 종료시점까지 유지된다.

//document객체 안에 있다
console.log(document.cookie);

// 쿠키 구조
// 키와 값이 있다
// 문자열로 저장하면 된다
// name : 쿠키의 이름(키), value : 쿠키 값, time : 유효시간
function createCookie(name, value, time){
    // 처음 필요한것 : 쿠키의 지속 시간 
    // 쿠키 유효기간
    // 시간과 날짜 년도 정보를 제공해주는 객체를 만들 수 있다. 
    // 생성자로 구현이 가능하다. new 뭘 생성해줘야하나
    // Date

    // 지금 시간에 정보를 가지고 있는 객체를 만들어 준다
    let date = new Date();
    console.log(date);

    // 1시간 이후에 제거하고싶어
    let _day = 1;
    // getTime : 현재 시간 -
    console.log(date.getTime() + _day *24 * 60 * 60 * 1000);
    // 지금 시간에서 +로 얼마나 쿠키를 유지할 지 
    // 추가해줄거임
    // 쿠키가 제거될 시간을 구해서 값을 만들어 놓고
    // 만료시간

    // set get 
    // set : 변경할 때 네이밍으로 많이 사용한다
    // get : 정보를 호출할 때 
    // 객체를 만들어서 정보를 가져오는 경우 메소드는 get dmf Tmrh
    // setTime
    // 하루 이후 시간
    date.setTime(date.getTime() + _day *24 * 60 * 60 * 1000);

    // 쿠키를 추가하는 방법
    // 기본 규격
    // 쿠키의 멸 = 값; expirse+ 만료일+;path=/
    // toUTCString 메소드 날짜 시간 표시 방법을 변경해준다
    console.log(date.toUTCString())
    // 날짜 형태를 변경해서 Wed, 22 Mar 2023 04:47:10 GMT 이런식으로 
    document.cookie =name+"="+value+";expirse"+date.toUTCString()+"path=/";
}
createCookie("이벤트 팝업","true",1);
createCookie("이벤트 팝업2","true",1);

console.log(document.cookie);

// 야매로 작성한것
// function getCookie(name){
//     let value = document.cookie.split("=");
//     console.log(value);
//     return value[1];
// }
//쿠키의 함수를 작성해보자
// 정규식이 포함되기는 하는데 지금은 무시해도 된다
// 다들 정규식은 간단한 것만 사용하고 필요한 내용이 생기면 찾고하면 편해서
// 찾아서 작성하는 경우가 많다
function getCookie2(name){
    // match 메소드
    // 매개변수로 정규식 전달
    let value = document.cookie.match("(^|;) ?" +name + "=(^;]*)(;|$)");
    console.log(value);
    return value ? value[2] : null;
}
// 쿠키를 제거하는 함수 이 함수가 제일 쉽다
// 쿠키를 상하게만 하면 된다 . 날짜를 지나게
function deleteCookie(name){
    document.cookie = name +"=; expires=Thu. 01 Jan 1999 00:00:10 GMT,";

}
deleteCookie("이벤트 팝업");
deleteCookie("이벤트 팝업2");

console.log(getCookie2("이벤트 팝업"));
console.log(getCookie2("이벤트 팝업2"));


// 로컬스토리지
// 로컬 스토리지 : 브라우저에 데이터를 저장하는 방법들중 하나고.
// pc 에 데이터가 저장되고.
// 쿠키와 세션과 다른점 : 만료일이 없다. 

// 로컬 스토리지 쉽다.
// 브라우저 가능을 사용해야 하니까 window 객체안에 있는 메소드를 사용
//getItem메소드가 값을 호출할 대 사용한다
//getItem() 메소드는 매개변수로 "키값"
//window.localStorage.getItem()

//setItem 값을 키값과 함께 저장시켜준다.

window.localStorage.setItem("유저_id","soo");
let a = window.localStorage.getItem("user_id");
console.log(a);

//쿠키, 로컬스토리지 이런 저장소에 민감한 값을 저장하면 안된다.
// 보안이슈

// 오늘 내용도 어려운게 정상이기 때문에 조금만 노력합니다ㅏㅏㅏ