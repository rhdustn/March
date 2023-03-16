// 로또 추첨기 만들기

// 로또 추첨 기계
// 로또 번호들이 들어갈 로또 박스
let lottoNum = [];

let res = [];

//1. 로또는 겹치는 숫자가 없어야함
//2. 숫자 6개
//3. 나온 숫자들의 결과를 보여주자

for (let i = 1; i <= 45; i++) {
    //1~45번까지 숫자를 배열에 담아주고 
    lottoNum.push(i)
}
console.log(lottoNum);
//체크하면서 만들어야 버그가 어디서 났는지 해결 가능




//추첨 전에 세팅 작업
function lottoInit(){

    // 베열 최기화
    lottoNum = [];
    for (let i = 1; i <= 45; i++) {
    //1~45번까지 숫자를 배열에 담아주고 
    lottoNum.push(i)

    }
    console.log("init 함수 실행 lotto 세팅 끝" +lottoNum)
}

function lottoPlay() {
    
    res = [];
    for (let i = 0; i < 6; i++) {
    // 값이 만약에 5.7
    //floor 함수는 5로 만들어 준다

    //0~44 랜덤 숫자를 뽑고 인덱스로 사용;
    let rndIndex = Math.floor(Math.random() * lottoNum.length);
    //랜덤으로 뽑은 인덱스를 가지고  lottoNum배열에 인덱스로 전달해서 
    //number라는 변수에 담아놓자
    let number = lottoNum[rndIndex];

    // 랜덤한 값이 또 나오지 않기 위해서.
    // 배열에서 값을 제거하려면 어떻게 해야할까.
    //배열의 메소드 splice 함수를 이용하면 된다
    // 시작점(인덱스), 그 시작점으로 부터 몇게를 제거할 것인지
    // 매개면수로 전달
    lottoNum.splice(rndIndex, 1);
    // 인덱스에 해당하는 값 하나만 제거
    // 해당 배열에서 갑싱 제거되면 값이 줄어들기 때문에
    // 랜덤값을 구하는 과정에서도 lottoNum.length 길이 값이 줄어들기 때문에 정상적으로 작동 할 수 있다
    // 결과값 담아두자
    res.push(number);
    

}
}

function main(){
     lottoInit();

     lottoPlay();
console.log("로또의 결과는 "+res);
}

//함수 초가화나 play 같은 위릐 코드처럼 단위별로 기능을 정리해 두었을때 단위 테그스가 가능하다
// 단위별로 버그가 없는지 테스프 해 볼 수 있다

// 단위별 기능 오류가 없게 되면 케스츠를 진행 전체적 기능이 오류가 없는지 테스트 진행
// 전체기능이 들어있는 함수를 만들고 함수가 실행될때마다

main();
main();
main();

// 이렇게 단위 통합으로 작업을 정리해두는 