//let a = document.querySelector(".aaa");
//console.log(a);
// null 이뜸 왜인지는 html 참고

// 문서를 그릴 준비가 다 끝나고 실행되는 함수
// 이렇게 하면 고장이 안난다
window.onload = function(){
    let a = document.querySelector(".aaa");
    console.log(a);
    // 여기서 작업을 다 하거나 분리하거나
}