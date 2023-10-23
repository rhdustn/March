// SPDX-License-Identifier-MIT

pragma solidity ^0.8.13;
contract Baseball{
    // 컨트랙트 배포한 사람
    // 컨트랙트 소유자

    // 컨트랙트 배포자
    address private owner;

    // 게임의 횟수
    // constant 구문을 추가하면 상태를 변경하지 않은 상태 변수
    uint256 private constant GAME_COUNT =5;

    // ticket 게임을 하고싶으면 지불해야하는 이더
    uint256 private ticket = 5 ether;

    // 정답의 값을 담아놓을 변수
    // 컴퓨터가 정할 랜덤 값
    // 3자리수 숫자
    uint256 private random;

    // 게임의 진행도
    uint256 private progress;

    // 총 모여있는 상금
    uint256 private reward;

    // 게임의 현재상태
    enum GameStatus {
        Playing, // 0 
        GameOver // 1
    }

    // 최초의 상태갑은 0
    // 게임 플레이중
    GameStatus gameStatus; //0

    // 컨트랙트 생성자
    // 딱 한번 실행되는데
    // 컨트랙트가 배포가 되면
    constructor (){ 
        // 최초에 딱 한번 배포자가 상태변수에 담기고
        owner = msg.sender;

        // keccak256(x) : 솔리디티에서 랜덤값을 뽑을때 사용 매개변수를 해시값으로 변경해준다
        // block
        // abi.encodePacked : 매개변수로 전달된 내용들을 가지고 바이트 배열로 만들어 준다
        random = uint(keccak256(
            abi.encodePacked(
                block.timestamp, 
                block.difficulty, 
                block.coinbase, 
                block.number
                )));
    // 큰 숫자가 나오는데
    // 이 숫자를 가지고 나머지 연산을 통해 원하는 자리수의 숫자를 구하자

    // 100~999
    random = (random % 900) + 100;

    }
    // 유저의 값을 받아서 비교를 통해 값이 맞는지 게임의 정답을 맞췄는지 구할 함수
    function gameStart(uint256 _value) public payable {
        require(progress < GAME_COUNT, "GameOver");
        require(msg.value == ticket, "ticket amount error (5ether)");
        require((_value >=100) && (_value<1000), "_value error (99 < _value < 1000");
        progress +=1;
    if(_value == random){
        // 게임 끝
        // ca의 잔액이 보상 만큼 있는지 검사
        require(reward <= address(this).balance);
        payable(msg.sender).transfer(address(this).balance);
        reward = 0;
        // gameStatus 상태가 상수값 1로 들어감
        // 1은 게임이 끝났다는 이야기
        gameStatus = GameStatus.GameOver;
    }else{
        reward += msg.value;
    }
    }

    // 지금 현재 쌓인 보상을 보여줄 함수
    function getReward() public view returns(uint256) {
        return reward;
    }
    // 게임이 얼마나 진행됬는지 보여줄 함수
    function getProgress() public view returns(uint256){
        return progress;
    }
    //티켓의 금액을 보여줄 함수
    function getTicketPrice() public view returns(uint256){
        return ticket;
    }

    // 어드민 모드
    // 정답을 확인하는 함수
    function getRandom() public view returns(uint256){
        // require(owner == msg.sender, "admin");
        if(owner == msg.sender){
        return random;
        }else{
           return 0;
        } 
        
    }
    // 게임중인지 확인할 함수
    function getPlay() public view returns(uint256){
        // 게임이 진행되고 있는 상수값이 0
        uint256 Playing = 0;

        if((gameStatus != GameStatus.Playing) || (progress ==GAME_COUNT))
        // 게임이 끝났다
        Playing =1;
        return Playing;
    }

    // 오너 보이게 하는 방법
    function getContractOwner() public view returns (address) {
    return owner; // owner 주소 반환
}
    

    // 게임 재시작
    function gameReset() public {
    // require(gameStatus == GameStatus.GameOver, "GameRestart?")

    // 게임을 초기화하는 로직
    progress = 0;
    reward = 0;
    random = uint(keccak256(abi.encodePacked(block.timestamp, block.difficulty, block.coinbase, block.number)));
    random = (random % 900) + 100;

    // 게임을 다시 시작
    gameStatus = GameStatus.Playing;
}


}