//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./IERC20.sol";

contract ERC20 is IERC20 {
    //  토큰의 이름
    string public name;

    // 토큰의 간위 심볼
    string public symbol;

    // 토큰의 소숫점 자리
    uint8 public decimals = 18;

    // 토큰의 현재 총 발행량
    uint public override totalSupply;

    address private owner;

    mapping(address => uint)public balances;
    // {
    //     "0x45789123"
    // }

    mapping(address=> mapping(address =>uint))public override allowance;

    // CA주소로 이더가 전송이 되었을때 실행시키고 싶은 동작이 있어
    // 익명함수
    // receive 익명함수(특별한 함수)
    // CA네 이거를 받으면 자동으로 실행되는 메서드
    // 이더를 CA에 전송을 받았을때 동작을 추가할 수 있다
    receive() external payable{
        // 이더를 ca가 받았을때 실행되는 동작

        // 배포자가 토큰을 발행량을 관리를 하고
        // 다른 이용자들이 토큰을 가지고 시ㅍ으면
        // 컨트랙트 배포자가 정한 비율에 따라 토큰을 가져갈 수 있게

        // 소유권을 줄 토큰의 량
        // 받은 이더의 비율로
        uint amount = msg.value *200;

        require(balances[owner]>=amount);
        balances[owner]-=amount;
        balances[msg.sender] +=amount;

        // 만약 토큰을 다 소유권을 넘겨서 배포자가 들고있는 토큰이 없다
        // 만약에 배포자가 이더를 보냈으면 더 토큰을 발행할 수 있게

        if(msg.sender ==owner){
            mint(amount);
        }

    }

    // 생성자 컨트랙트
    constructor(string memory _name, string memory _symbol, uint256 _amount){
        owner = msg.sender;
        name = _name;
        symbol = _symbol;
        mint(_amount * (10 ** uint256(decimals)));

    }

    function mint(uint amount) internal{
        balances[msg.sender]+=amount;
        totalSupply +=amount;
    }

    function balanceOf(address account) external view override returns(uint){
        return balances[account];
    }

    function transfer(address to, uint amount) external override returns(bool){
        balances[msg.sender]==amount;
        balances[to] +=amount;
        return true;
    }

    function approve(address spender, uint amount) external override returns(bool){
        allowance[msg.sender][spender] = amount;
        return true;
        // sender ==A
        // msg.sender == B
        // to ==C
        // {
        //     A:{
        //         B:100
        //     }
        // }
    }

    function transferFrom(address sender, address to, uint amount) external override returns(bool){
        require(allowance[sender][msg.sender] >=amount);
        allowance[sender][msg.sender] -= amount;
        balances[sender]-=amount;
        balances[to] +=amount;
        // {
        //     A:{
        //         B:50
        //     }
        // }
    }
    function burn(uint amount) external{
        balances[msg.sender] -=amount;
        totalSupply -=amount;
    }
}