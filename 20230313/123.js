let count = 0;// 게임 시행 횟수
let playcount = 20;// 최대 게임 횟수
let buget = 20000 // 플레이어 시작금
let bugetmin = 2000  // 최소 배팅금

let player1;  // 플레이어 가위바위보 선택
let player2;  // 플레이어 묵찌빠 선택

let comSelect1 = "";  // com의 가위바위보 선택 문자열화
let comSelect2 = "";  // com의 묵찌빠 선택 문자열화

let comFirst = true;  // 묵찌빠 선공, true면 com이 선공

let bettingMoney; // 플레이어 배팅 금액

let cpu; // com의 가위바위보

let cpuCtrl1;  // com 가위바위보 설정 boolean
let cpuCtrl2;  // com 묵찌빠 설정 boolean

let playGame1 = true;  // 가위바위보 게임 진행 boolean
let playGame2 = true;  // 묵찌빠 게임 진행 boㄴolean


//배팅금액 필터
while(count<playcount && buget >=2000){
    bettingMoney = parseInt(prompt(`배팅금액을 입력해 주세요. \n 남은 게임 횟수 ${playcount- count} \n
    최소 : ${bugetmin} | 소지금 : ${buget}`))

    while(isNaN(bettingMoney) || bettingMoney < bugetmin || bettingMoney >buget){
        if (isNaN(bettingMoney)){
            bettingMoney = parseInt(prompt(`숫자로 다시 입력해주세요 \n 
            최소 ${bugetmin} | 현재소지금 ${buget}`))
            
        }
        while(bettingMoney < bugetmin || bettingMoney >buget){
            if(bettingMoney < bugetmin){
                bettingMoney = parseInt(prompt(`금액을 2000원 이상 넣어주세요 \n
                최소 ${bugetmin} | 현재소지금 ${buget} `))
                continue
            }else if(bettingMoney >buget){
                bettingMoney = parseInt(prompt(`배팅 금액이 너무 큽니다. 다시 입력해 주세요.\n]
                최소 ${bugetmin} | 현재소지금 ${buget}`))
            }
            
        }
    }

    player1 = prompt(`게임 시작! 가위, 바위, 보 를 입력하세요.`);

    while(playGame1){
        cpu = parseInt(Math.random()*3);
        cpuCtrl1 = true;

        while(cpuCtrl1){
            switch (cpu) {
                case 0:
                    comSelect1 = "가위";
                    cpuCtrl1 = false;
                    break;
                case 1:
                    comSelect1 = "바위";
                    cpuCtrl1 = false;
                    break;
                case 2:
                    comSelect1 = "보";
                    cpuCtrl1 = false;
                    break;
            
                default:
                    break;
            }
        }

        if (player1===comSelect1){
            player1 = prompt("비겼습니다 다시 입력해주세요")
        }else{
            switch (player1) {
                case "가위":
                    if (comSelect1 === "바위"){
                        comFirst = true;
                    }else {
                        comFirst = false;  
                    }
                    playGame1 = false
                    break;
                case "바위":
                    if (comSelect1 === "보"){
                        comFirst = true;
                    }else {
                        comFirst = false;  
                    }
                    playGame1 = false
                    break;
                case "보":
                    if (comSelect1 === "가위"){
                        comFirst = true;
                    }else {
                        comFirst = false;  
                    }
                    playGame1 = false
                    break;
                default:
                    player1 = prompt("가위바위보 잘못 입력하였습니다. 가위, 바위, 보 중 하나를 입력하세요.");
                    break;
            }
        }
    }

    while (playGame2){
        cpu = parseInt(Math.random()*3)
        cpuCtrl2 = true;

        while(cpuCtrl2){
            switch (cpu) {
                case 0:
                    comSelect2 = "가위"
                    cpuCtrl2 = false
                    break;
                case 1:
                    comSelect2 = "바위"
                    cpuCtrl2 = false
                    break;
                case 2:
                    comSelect2 = "보"
                    cpuCtrl2 = false
                    break;
            
                default:
                    break;
            }
        }
        // 묵짜빠
        if(comFirst == true){
            player2 = prompt("com의 공격으로 묵찌빠를 진행하겠습니다.\n 가위, 바위, 보 중 하나를 입력하세요.");

            if(player2 === comSelect2){
                console.log(`컴퓨터의 승리입니다`)
                buget = buget - bettingMoney *2
                playGame2 = false
            }else{
                switch (player2) {
                    case "가위":
                        if(comSelect2 === "바위"){
                            comFirst = true
                        }else{
                            comFirst = false
                        }
                        break;
                    case "바위":
                        if(comSelect2 === "보"){
                            comFirst = true
                        }else{
                            comFirst = false
                        }
                        break;
                    case "보":
                        if(comSelect2 === "가위"){
                            comFirst = true
                        }else{
                            comFirst = false
                        }
                        break;
                
                    default:
                        player2 = prompt("묵찌빠 잘못 입력하였습니다. 가위, 바위, 보 중 하나를 입력하세요.");
                        break;
                }
            }

        } else{
            player2= prompt("플레이어의 공격으로 묵찌빠를 진행하겠습니다.\n 가위, 바위, 보 중 하나를 입력하세요.");

            if (player2===comSelect2){
                console.log(`플레이어가 이겼습니다`)
                buget = buget + bettingMoney * 2;
                playGame2 = false

            }else{
                switch (player2) {
                    case "가위":
                        if(comSelect2 === "바위"){
                            comFirst = true
                        }else{
                            comFirst = false
                        }
                        break;
                    case "바위":
                        if(comSelect2 === "보"){
                            comFirst = true
                        }else{
                            comFirst = false
                        }
                        break;
                    case "보":
                        if(comSelect2 === "가위"){
                            comFirst = true
                        }else{
                            comFirst = false
                        }
                        break;
                        player2 = prompt("묵찌빠 잘못 입력하였습니다. 가위, 바위, 보 중 하나를 입력하세요.");
                    default:
                        break;
                }
            }
        }
    }
    playGame1 = true;
    playGame2 = true;
    count++;
    // 게임 종료
    if (count >= playcount || buget < 2000) {
        console.log(`모든 게임이 종료되었습니다.\n 최종 게임 횟수 : ${count} | 플레이어 총 획득 금액 : ${buget}`)
    }
}

