// 예외 처리문

// try-catch 문 : 코드 실행중에 예외상황이 발생해도 프로그램이 종료가 되지 않고
// 프로그램을 유지할 수 있다.

// try-catch 
// 프로그램의 안정성을 높일 수 있다. 

try {
    // 오류가 발생할거 같은 코드
} catch (error) {
    // 오류가 발생했을때
    // 오류의 메세지 = error
} 

try {
    if(5 == 5)throw "뭐ㅏ지"
    //throw 에러의 메세지를 던질수 있다
} catch (error) {
    console.log(error);
    
}

function myStr(){
    let devValue = document.querySelector('.dev').value;
    try {
        if(devValue =="")throw"비었음"
        devValue = Number(devValue);
        // Number 숫자로 타입을 변경해 주는 생성자 함수
        if(!isNaN(devValue))throw "number임"
        // 문자열이 들어가면 문자가 숫자로 변환될수 없어서
        // number 가 아니다

        // 오류가 발생을 해도 프로그램이 종료가 안된다
    } 
    catch (error) {
        // 코드를 실행하다 err 가 발생하면
        // catch 문을 실행하고 오류의 내용은
        // error 매개변수에 들어온다
        console.log(typeof devValue);
        console.log(devValue);
        document.querySelector(".message").innerHTML = error;
    }
}