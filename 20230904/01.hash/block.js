// 최초의 블록 제네시스 블록
const {SHA256} = require("crypto-js")
const merkle = require("merkle")
// 블록 헤더 class

// 블록의 헤더 내용
// 블록의 버전
// 블록의 높이
// 블록의 생성시간
// 이전 해시값
// 등등
class Header {
    constructor(_height, _previousHash){
        // 블록의 버전
        this.version = Header.getVersion();
        // 블록의 높이
        this.height = _height
        // 블록의 생성 시간
        this.timestamp =Header.getTimestamp()
        // 이전 블록의 해시 값
        // 최초블록은 이전 블록이 없으니 0으로 대체
        this.previousHash = _previousHash || "0".repeat(64)
    }
    // static으로 메서드 선언하면 전역으로 사용할 수 있고
    // 이 클래스로 객체를 생성 즉 동적할당 했을때 이 메서드가 그 객체에 생성되지 않는다
    static getVersion(){
        return "1.0.0"
    }
    static getTimestamp(){
        return new Date().getTime()
    }
}

// 블록 class
class Block {
    // block header. data 헤더 객체와 네용을 받아서 생성
    constructor(_header,_data){
        this.version = _header.version;
        this.height = _header.height
        this.timestamp = _header.timestamp
        this.previousHash = _header.previousHash
        this.data = _data
        this.merkleRoot = Block.getMerkleRoot(_data)
        // 블록의 해시
        this.hash = Block.createBlockHash(_header, Block.getMerkleRoot(_data))
    }
    static getMerkleRoot(_data){
        const merkleTree = merkle("sha256").sync(_data)
        return merkleTree.root()
    }
    static createBlockHash(_header,_merkleRoot){
        // 값을 모두 배열로 가져와서
        const values = Object.values(_header)
        // join 으로 배열을 문자열로 합치고 구분점은 빈 문자열 " "
        const data = values.join("")+_merkleRoot
        return SHA256(data).toString()
    }
}

// 블록을 생성해보자
// 블록에 담을 데이터는 더미로
const data =['The Times 03/Jan/2009 Chancellor on brink of second bailout for banks'];

// 블록 헤더 객체 생성
// 첫번째 블록 0을 주고 객체 생성
const header = new Header(0)

const block = new Block(header, data);
// 
console.log(block)

const header2 = new Header(1,block.hash)
const header3 = new Header(2,block.hash)
const block2 = new Block(header2,["두번째 블록 데이터"])
const block3 = new Block(header3,["세번째 블록 데이터"])
console.log(block2)
console.log(block3)