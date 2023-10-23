// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "./myNFT.sol";

contract SaleNFT {
    // 누가 판매등록을 한 NFT 들이 보여야 하니까
    // 판매 금액이 얼마인지 다루는 컨트랙트
    // 상호작용할 CA의 주소필요하다.
    MyNFT public _nft;

    // CA 상호작용할 컨트랙트를 담을 상태 변수

    constructor(address _nftCA) {
        _nft = MyNFT(_nftCA);
        // 상호작용할 CA 인스턴스 생성
    }
    

    function _saleNFTmint(string memory url) public  {
        // CA에서 CA로 메시지 전송 메서드 실행
        _nft.minting(url);
    }

    // 판매에 대한 내용의 함수를 작성을하고
    // saleNFT에서 myNFT 메시지를 보내서 NFT권한을 위임받는 함수를 실행 해보자.

    function setApprovalForAll() public {
        _nft.setAppAll(msg.sender, address(this), true);

    }
        // ㅛㅣㄹ행시킨 사람이 판매 컨트랙트에게 nft의 권한을 위임했는지 확인하는 함수
    function saleNFT() public view returns (bool) {
        return _nft.isApprovedForAll(msg.sender, address(this));

    }

}
