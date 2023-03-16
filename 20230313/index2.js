// 만들어볼 업다운 게임
//숫자맞추기

//1. 플레이어가 있고. 컴퓨터가 있고
//2. 플레이어는 선택을 할 수 잇고 텀퓨처는 랜덤값
//3. 플레이어가 선택할 수 있는 제어문
//4. 게임의 종료시점을 정함

let playerSelect;
//1~100의 랜덤숫자
let comSelect = parseInt( Math. random() * 99 +1) ;

let count =0; //시도한 횟수

let max = 100;//플레이어가 선책이 가능한 최대의 숫자
let min = 0 ; //플레이어가 선택이 가능한 최소의 숫자

let subText = ""; //컴퓨터가 알려줄 문구
let maxCount = parseInt(prompt("게임 몇 번 할래?")); // 게임 횟수 

// 반복되어야 하니까
alert(comSelect)
while(playerSelect !== comSelect && count < maxCount){
    //ES6 에서 문자열을 사용할 때 편하게 사용할 수 있는 기법
    // 템플릿 리커럴 문자를 다룰때 줄바꿈 같은걸 편하게 사용할수 있게 해준다
    //'백틱
    //"안녕" +  playerSelect  
    //`${변수} 문자열
    playerSelect = prompt(`${subText}\n 숫자를 입력하세요 \n 최소 : ${min} | 최대${max} | 남은횟수 :${maxCount - count} `)

    // 숫자로 전환
    //입력된 값이 숫자인지 확인? 문자쓰면 어떻게?
    // playerSelect = parseInt(playerSelect);
    // is NaN 숫자가 아닌 값을 입력했는지
    if(isNaN(playerSelect))
    {
        subText = "숫자 입력";
        //다시 게임을 시작해야하는데? 및의 작성된 코드를 읽지 않데 할 수 없을까?
        continue ; // 다시 시작 
        // continue 구문부터 밑으로 읽지않고 다시 반복문 시작접으로 돌아간다
        
    }
    // 최소와 최대 사이의 값인지 확인 범위의 값이 맞는지
    if(min >= playerSelect || max <= playerSelect){
        subText = `너 입력값 확인해 최소 : ${min} | 최대 : ${max}`
        continue; //다시 입력 하세요
    }
    if(playerSelect > comSelect){
        //max 최대값을 다시 겹치지 않게 입력해준다
        max = playerSelect;
        subText = "다운"
    }else if (playerSelect < comSelect){
        //min 최소값을 다시 겹치지 않게 입력해준다
        max = playerSelect;
        subText = "업"
    }else{
        count = count + 1;
        console.log (`${count}번 시도해서 맞췄어 축하~~`);
        // 게임 끝났음
        break;

    }
    //게임 횟수 증가해야함
    count++
    if (count >= maxCount){
        // 너 실패함
        console.log("게임 오버")
    }
}