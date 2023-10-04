// SPDX-License-Identifier:MIT
pragma solidity ^0.8.13;

import "./Counter.sol";

contract Counter2{
    uint256 value; // 상태 변수 uint 전수 부등호가 없는 정수 상태변수
    Counter counter; // Counter 컨트랙트의 구조를 가지고 있는 counter 상태변수

    constructor(){
        // Counter 인스턴스를 하나 생성
        counter = new Counter();
    }

    function setValue(uint256 _value) public{
        value = _value;
        counter.setValue(_value);
    }
    function getValue() public view returns(uint256){
        return value;
    }
    function getValue2() public view returns(uint256){
        return counter.getValue();
    }
}