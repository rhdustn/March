// 가위바위보
//20판, 조건 입장료 2000원 이상 , 배팅 금액 20000원
let count = 0;
let buget = 20000
let bugetmin = 2000
let min = 0
let user = '';
let computer = '';
let playcount = 20;
let betting = ""
let subText = ""


let com;
let com2;
let play = true;
//while 문 안은 true or false
// 20번 이상 돌리면 false가 나오게한다.


while (buget !== min || playcount - count !== min) {

    
    if (playcount - count == 0 || buget <= 0) {
    alert("게임이 불가능 합니다")
   break;
}

    betting = parseInt(prompt(`${subText} 얼마를 배팅하겠습니까? \n 남은횟수${playcount - count} \n 남은돈${buget} `));
    if (betting < bugetmin) {
        alert("배팅금액 2000원 이상 입력");

        continue;
    }
    let play = true;
    
    com = (parseInt(Math.random() * 3));
    alert(com);

    let value = prompt("가위, 바위, 보를 입력하세요")

    switch (value) {
        case "가위":
            if (com == 0) {
                alert("비겼습니다 다시 '가위바위보'를 해주시길 바랍니다")
                continue
            } else if (com == 1) {
                alert("컴퓨터가 가위바위보에서 이겼습니다 컴퓨터가 묵찌빠의 선공을 가집니다")
                computer = 'win';
                user = 'lose'
            } else {
                alert("유저가 이김");
                computer = 'lose';
                user = 'win';
            }

            //묵찌빠 무한 반복 시작 구문=>play를 true
            // case 끝나는 지점에 무조건!!!break 승부가 결정나면 play=false
            while (play) {
                alert('들어옴');
                //    묵찌빠 시작
                
                com2 = (parseInt(Math.random() * 3));
                alert(com2);
                let hand = prompt("묵,찌,빠를 입력하세요");
                switch (hand) {
                    case "찌":
                        if (com2 == 0) {
                            
                            if (computer === 'win') {
                                buget = buget - betting * 2
                                alert("당신이 졌습니다");
                                playcount--;
                                play = false;
                            }
                            else if (user === "win") {
                                buget = buget + betting * 2
                                alert("당신이 이겼습니다");
                                playcount--;
                                play = false;

                            }
                            
                        }
                        else if (com2 == 1) {
                            alert("컴퓨터의 공격입니다");
                            computer = 'win';
                            user = 'lose';
                            continue;



                        } else {
                            alert('공격')
                            alert(" 당신의 공격입니다")
                            computer = 'lose';
                            user = 'win';
                            continue;
                        }
                        break;
                    case "묵":
                        if (com2 == 0) {
                            alert("당신의 공격입니다 ")
                            computer = 'lose';
                            user = 'win';
                            continue;
                        }
                        else if (com2 == 1) {
                            if (computer === 'win') {
                                buget = buget - betting * 2
                                alert("당신이 졌습니다");
                                playcount--;
                                play = false;

                            } else if (user === "win") {
                                buget = buget + betting * 2
                                alert("당신이 이겼습니다")
                                playcount--;
                                play = false;
                            }
                            
                        } else {
                            alert(" 컴퓨터의 공격입니다")
                            computer = 'win';
                            user = 'lose';
                            continue;

                        }
                        break;
                    case "빠":
                        if (com2 == 0) {
                            alert(" 컴퓨터의 공격입니다")
                            computer = 'win';
                            user = 'lose';
                            continue;
                        }
                        else if (com2 == 1) {
                            alert("당신의 공격입니다 ")
                            computer = 'lose';
                            user = 'win';
                            continue;
                        }
                        else {
                            if (computer === 'win') {
                                buget = buget - betting * 2
                                alert("당신이 졌습니다");
                                playcount--;
                                play = false;

                            } else if (user === "win") {
                                buget = buget + betting * 2
                                alert("당신이 이겼습니다")
                                playcount--;
                                play = false;
                            }
                        }
                        break;
                }
            }
            break;

        case "바위":
            if (com === 0) {
                alert('유저가 이김');
                computer = 'lose';
                user = 'win';
            } else if (com === 1) {
                alert('비겼습니다.');
                continue;
            } else {
                alert('컴퓨터가 이김');
                computer = 'win';
                user = 'lose';
            }

            while (play) {

                alert('들어옴');
                //    묵찌빠 시작

                com2 = (parseInt(Math.random() * 3));
                alert(com2);
                let hand = prompt("묵,찌,빠를 입력하세요");

                switch (hand) {
                    case "찌":
                        if (com2 == 0) {

                            if (computer === 'win') {
                                buget = buget - betting * 2
                                alert("당신이 졌습니다");
                                playcount--;
                                play = false;
                                break;
                            }
                            else if (user === "win") {
                                buget = buget + betting * 2
                                alert("당신이 이겼습니다");
                                playcount--;
                                play = false;
                                break;

                            }


                        }
                        else if (com2 == 1) {
                            alert("컴퓨터의 공격입니다");
                            computer = 'win';
                            user = 'lose';
                            continue;



                        } else {
                            alert('공격')
                            alert(" 당신의 공격입니다")
                            computer = 'lose';
                            user = 'win';
                            continue;
                        }
                        break;
                    case "묵":
                        if (com2 == 0) {
                            alert("당신의 공격입니다 ")
                            computer = 'lose';
                            user = 'win';
                            continue;
                        }
                        else if (com2 == 1) {
                            if (computer === 'win') {
                                buget = buget - betting * 2
                                alert("당신이 졌습니다");
                                playcount--;
                                play = false;
                                break;
                            }
                            else if (user === "win") {
                                buget = buget + betting * 2
                                alert("당신이 이겼습니다");
                                playcount--;
                                play = false;
                                break;

                            }

                        } else {
                            alert(" 컴퓨터의 공격입니다")
                            computer = 'win';
                            user = 'lose';
                            continue;
                        }
                        break;
                    case "빠":
                        if (com2 == 0) {
                            alert(" 컴퓨터의 공격입니다")
                            computer = 'win';
                            user = 'lose';
                            continue;
                        }
                        else if (com2 == 1) {
                            alert("당신의 공격입니다 ")
                            computer = 'lose';
                            user = 'win';
                            continue;
                        }
                        else {
                            if (computer === 'win') {
                                buget = buget - betting * 2
                                alert("당신이 졌습니다");
                                playcount--;
                                play = false;
                                break;
                            } else if (user === "win") {
                                buget = buget + betting * 2
                                alert("당신이 이겼습니다");
                                playcount--;
                                play = false;
                                break;
                            }
                        }
                        break;
                }
            }
            break;
        case "보":
            if (com === 0) {
                user = "lose";
                computer = "win";
                alert("컴퓨터가 이겼습니다");
            }
            else if (com === 1) {
                user = "win";
                computer = "lose";
                alert("user 가 이겼습니다");
            } else {
                alert("비겼습니다");
                continue;
            }
            while (play) {
                alert('들어옴');
                //    묵찌빠 시작
                
                com2 = (parseInt(Math.random() * 3));
                alert(com2);

                let hand = prompt("묵,찌,빠를 입력하세요");

                switch (hand) {
                    case "찌":
                        if (com2 == 0) {
                            
                            if (computer === 'win') {
                                buget = buget - betting * 2
                                alert("당신이 졌습니다");
                                playcount--;
                                play = false;
                            }
                            else if (user === "win") {
                                buget = buget + betting * 2
                                alert("당신이 이겼습니다");
                                playcount--;
                                play = false;

                            }
                            
                        }
                        else if (com2 == 1) {
                            alert("컴퓨터의 공격입니다");
                            computer = 'win';
                            user = 'lose';
                            continue;



                        } else {
                            alert('공격')
                            alert(" 당신의 공격입니다")
                            computer = 'lose';
                            user = 'win';
                            continue;
                        }
                        break;
                    case "묵":
                        if (com2 == 0) {
                            alert("당신의 공격입니다 ")
                            computer = 'lose';
                            user = 'win';
                            continue;
                        }
                        else if (com2 == 1) {
                            if (computer === 'win') {
                                buget = buget - betting * 2
                                alert("당신이 졌습니다");
                                playcount--;
                                play = false;

                            } else if (user === " win") {
                                buget = buget + betting * 2
                                alert("당신이 이겼습니다")
                                playcount--;
                                play = false;
                            }
                            }
                            else {
                            alert(" 컴퓨터의 공격입니다")
                            computer = 'win';
                            user = 'lose';
                            continue;

                        }
                    
                        break;
                    case "빠":
                        if (com2 == 0) {
                            alert(" 컴퓨터의 공격입니다")
                            computer = 'win';
                            user = 'lose';
                            continue;
                        }
                        else if (com2 == 1) {
                            alert("당신의 공격입니다 ")
                            computer = 'lose';
                            user = 'win';
                            continue;
                        }
                        else {
                            if (computer === 'win') {
                                buget = buget - betting * 2
                                alert("당신이 졌습니다");
                                playcount--;
                                play = false;

                            } else if (user === "win") {
                                buget = buget + betting * 2
                                alert("당신이 이겼습니다")
                                playcount--;
                                play = false;
                            }
                        }
                        break;
                }
            }




        default:
            break;
    }
}
