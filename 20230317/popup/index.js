// 팝업 여는 함수
function openPopup(){
    let popup = document.querySelector(".popup-wrap");
    console.log(popup);
    popup.classList.add('is-active')
    // console.log(popup.className);

    //popup.className
    //popup.classList

    // popup.className을 사용하면 문자열을 그대로 대입해주면 되고
    //popup.classList를  사용하면 메소즈를 사용하면 된다

    // 클래스 구분을 줘야 하기 때문에 ' is-active'앞에 한칸 띄워줬다
    //popup.className = popup.className + " is-active";
    //popup.classList.add("is-active");
    // 메소드가 편하다
    // popup.classList.contains("is-active") : is-active 클래스가 있는지  확인
    // 문자열 버전
    // let strArr =  popup.className.split("");
    // console.log(strArr.indexOf("is-active"));
    // if(strArr.indexOf("is-active") != -1){
    //     // class 있으면
    //     // 문자열 제거해서 클래스를 지울 수 있고
    // }else {
    //     // class 없으면
    //     popup.className = popup.className + "is-active";
    // }
    // 메소드 조건추가
    if(popup.classList.contains("is-active")){
        // is-active 있으면 제거
        // remove 클래스 제거 메소드
        popup.classList.remove("is-active");
    }else{
        // is-active 없으면 추가
        // add 클래스 추가 메소드
        popup.classList.add("is-active");

    }
    
}
