const merkle = require("merkle");

// merkle tree 데이터의 암호화 구조가 트리 형태

// 머클트리
const data = ["A","B","C","D","E"];
// 데이터의 무결성 검증에 사용되는 트리 구조
// 블록의 필수 요소 데이터들을 해시화 해서 더한 후 해시화 반복
// 트리처럼 뻗어서 마지막 루트 해시값을 구해서 사용
// 머클루트를 처리할 때 홀수일 경우 마지막 데이터를 한번 더 해시해서 사용한다

const merkleTree = merkle("sha256").sync(data);
const Root = merkleTree.root();
console.log("루트임",Root)

// A를 해시화 B 해시화 둘다 더해서 AB
// C+D CD
// E+E=EE
// AB+CD = ABCD
// EE+EE = EEEE
// 