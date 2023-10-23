// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "./node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MyNFT is ERC721 {
    constructor(
        string memory _name,
        string memory _symbol
    ) ERC721(_name, _symbol) {}

    mapping(uint256 tokenId => string tokenURI) _tokenURIs;
    uint256 totalSupply = 6;

    function minting(string memory tokenURI) public {
        _tokenURIs[totalSupply] = tokenURI;
        _mint(msg.sender, totalSupply);
        totalSupply += 1;
    }

    function tokenURI(
        uint256 _tokenId
    ) public view override returns (string memory) {
        return _tokenURIs[_tokenId];
    }

    // nft 정보를 opensea
    // _baseURI() + tokenURI(0) {}
    // _baseURI() + tokenURI(1)
    // _baseURI() + tokenURI(2)

    function _baseURI() internal view override returns (string memory) {
        return "https://copper-wrong-haddock-919.mypinata.cloud/ipfs/";
    }


        // 판매내용
        // 누가 판매등록을 했는지 담을 상태변수
        // 금액은 얼마로 정했는디
        // 판매에 개한 시기
        // 구매자가 구매의사를 표현하면서 구매 신청을 할 때
        // 상품의 금액만큼 CA에 이더를 보낸다
        // 판매자가 확인을 할 수 있고 판매
        // 확인버튼 누르면 이더를 받고 소유권을 구매자에게 넘긴다
        // 그럼 거래 끝

}
