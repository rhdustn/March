// 테스트 코드를 작성하면 시간이 오래걸리긴 하지만
// 코드의 품질을 좀 더 올릴 수 있다

// 단위별로 테스트를 진행해서 디버깅을 하고 코드를 작성할 수 있기 때문에

// 1단계 코드를 실행하고 2단계 코드를 실행하고 절차적으로 테스트를 우리가 진행을 해볼 수 있다

import { Block } from "@core/block/block";
import Chain from "@core/chain/chain";
import { GENESIS } from "@core/config";

// describe : 테스트들의 그룹화 그룹을 지정할 수 있다
// 첫번쨰는 그룹의 명 이름 어떤 테스트 인지
// 두번째 매개변수로 테스트들을 실행시키는 콜백함수
describe("block 테스트 코드 그룹",()=>{
    // 테스트들의 단위를 어떻게 작성하냐 
    // 하나의 테스트 단위 첫번째 매개변수에는 테스트 이름 명
    // 두번째 매개변수는 테스트 동작을 가지고 있는 콜백함수
    it("제네시스 블록 테스트",()=>{
        console.log(GENESIS)
    })
    it("오류 테스트",()=>{
        // 오류가 여기 잡힐거고
        console.log(GENESIS)
    })

})
describe("block 검증",()=>{
    let newBlock : Block;
    let newBlock2 : Block
    let newChain : Chain
    let newChain2 : Chain
    // let newBlock3 : Block
    // it 테스트 할 코드의 최소 단위
    it("블록 추가",()=>{
        const data =["Block 1"]
        newBlock = Block.generateBlock(GENESIS,data,GENESIS)
        // 블록의 난이도에 따른 마이닝을 동작해서
        // 조건에 맞을떄 까지 연산을 반복한 뒤에 생성된 블록을 newBlock에 받아온다
        // 이전 블록은 GENESIS(최초 블록)
        console.log(newBlock)
        const data2 = ["Block 2"]
        newBlock2 = Block.generateBlock(newBlock,data2,GENESIS)
        console.log(newBlock2)
        // const data3 = ["Block 3"]
        // newBlock3 = Block.generateBlock(newBlock,data3)
        // console.log(newBlock3)
    })
    it("블록 유효성 검증",()=>{
        const isValidNewBlock = Block.isValidNewBlock(newBlock,GENESIS)
        if(isValidNewBlock.isError){
            // expect : toBe : 값이 맞는지 확인할 때
            // 성공한결과가 맞는지 확인할 때 사용하는 코드
            // true false 비교해서 맞는지 확인
            return expect(true).toBe(false)
        }
        expect(isValidNewBlock.isError).toBe(false)
    })
    it("블록 체인 추가",()=>{
        newChain = new Chain();
        newChain.addToChain(newBlock)
        console.log("ㅎㅎㅎㅎ",newChain.get())
        // hash
        console.log("88888",newChain.getBlockByHash(newBlock.hash))
    })
    it("네트워크 체인비교(롱기스트 체인 룰)",()=>{
        newChain2 = new Chain()
        newChain2.replaceChain(newChain.get());
        console.log("9999999",newChain2.get())
    })
    it(" 이전 10번째 블록 or 최초 블록",()=>{
        // 현재 블록을 생성한다 가정하고
        // 현재 블록이 생성된 시간이 이전 10번째 블록으로부터 얼마나 걸렸는지
        // 확인을 하고 블록의 정해진 주기보다 빠르면 난이도를 올리고 아니면 내림
        for (let i = 0; i < 1; i++) {
           let block = Block.generateBlock(newChain.latestBlock(),["block"],newChain.getAdjustmentBlock())
           newChain.addToChain(block)
            
        }
        console.log("77777",newChain.getAdjustmentBlock())
    })
})
// 지갑 구성
// 개인키, 공개키, 서명
// 지갑 주소 / 계정 만들기

// 개인키와 공개키와 서명을 이용한 신원 인증 방식은 분산원장으라는 이해가 필요

// 분산원장 : 장부를 모두가 관리하는것. 데이터의 함의 기술

// crypto, elliptic, crypto-js
// npm i -D crypto
// npm i -D elliptic @types/elliptic
// npm i -D crypto-js @types/crypto-js

import {randomBytes} from "crypto"
import elliptic from "elliptic"
import { SHA256 } from "crypto-js";

const ec = new elliptic.ec("secp256k1")
// secp256k1은 비트코인과 이더리움에서 사용되는 알고리즘
// 키생성 및 디지털 성멸(너가 이걸 한게 맞는지 검증하기 위해 영수증), 주소 생성
// 타원곡선의 별명

// 전달하는 사람과 받는사람등 모든 사람들은 공통적으로 타원곡선의 한 점을 알고있어야 하는데
// 이 점을 타원곡선의 기준점 G 라고 부른다

// 타원곡선의 기준점 좌표가 뭐냐에 따라 타원곡선에 별명을 붙여준다

// 비트코인과 이더리움에서 사용되는 타원곡선 별명은 secp256k1임

//  y^2 = x^3 + ax +b
// 이 방정식에 만족하는 곡선

// a가0, b가 7기준점 G는 x 및 y 좌표응 16진수로 표햔한것
// 02 79BE667E F9DCBBAC 55A06295 CE870B07 029BFCDB 2DCE28D9 59F2815B 16F81798

// A가 트랜젝션 만들고 서명을 만들고(영수증)
// 본인들 볼펜이 하나씩 있어서 (개인키) 
// 볼펜 준비 타원곡선의 지정 범위내의 값으로 정한(1~n-1까지 정수 범위)(범위내의 정수)
// secp256k1의 n은 1.157920892373162e+77값 (과학 표법)
// 16진수로 변환하면 FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141
// FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141dptj -1해서
// 즉 1~FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364140까지의 숫자
// 범위중에 하나를 사용하는것.

// 개인키를 하나 임시로 지정을 해보면
// FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364140
// 전자서명을 만들때
// 2개의 서명이 필요하다
// 서명 r : 트랜젝션을 보낼때 개인키 처럼 정수를 뽑아서 이 값을 k 라고 한다 서명 r = k *G (기준점)
// 서명 s :공식 k⁻¹ = (z + r * private key) mod n k를 역수 계산 z+r*개인키 나머지 n
// k = 서명 r을 만들때 뽑은 랜덤 값
// z =  만든 트랜뎃션 정보
// r = 서명 r
// 개인키 = 범위에서 지정하고 본인만 알고있는 개인키
//  mod n=n으로 나눈 나머지
// 중요한건 서명 s 를 만드는데 개인키를 사용했다는 개념

// w 동일한 서명을 만들지 않게 하기 위해서 임의의 값을 추가 nonce 값이라고 보면 됨
// w = s⁻¹ mod n
// U1 = z*w mod n
// U2 = r*w mod n
// U1 * G + U2 + 공개키 값을 구해서 서명 R 과 같은지 비교해서 검증

// 중요한 중심만 이해를 하면 된다 개인키로 서명을 만든거고
// 이 서명을 가지고 공개키를 통해서 서명을 검증할 수 있다

// 데이터 전송
// 1. 트랜잭션 생성
// 2. 개인키 생성
// 3. 서명 r 서명 s 생성

// 데이터 수신
//  U1 * G + U2 + 공개키 이 식으로 값을 구해서 서명 r 과 비교(검증)

describe("지갑 만들기",()=>{
    let privKey : string
    let pubKey : string;
    let signature : elliptic.ec.Signature;
    
    it("개인키 생성",()=>{
        // 2진수의 랜덤 값을 만들자
        // 16 진수로 나타냄
        privKey = randomBytes(32).toString("hex");

        console.log("개인키 : "+privKey)
        // 개인키의 길이 64
        console.log("개인키 길이 : "+privKey.length)
    })
    it("공개키 생성",()=>{
        const keyPair = ec.keyFromPrivate(privKey);
        // false 문자열 압축 여부 중요하지 않음
        // 개인키로 공개키를 생성
        pubKey = keyPair.getPublic().encode("hex",false)
        console.log("공개키 : ",pubKey);
        // 공개키는 130자의 문자열
        console.log("공개키길이 : ",pubKey.length);


    })
    it("서명 만들기",()=>{
        const keyPair = ec.keyFromPrivate(privKey);
        // 임시 트랜잭션 내용
        const hash = SHA256("transaction data").toString()
        signature = keyPair.sign(hash, "hex");
        console.log("서명 :", signature)
        // r서명, s 서명
        // BN = BigNumber 무척 큰 number 타입
        // negative : 양수라는 의미
        // words : r서명이나 s 서명의 값을 32 전수 배열로 표시한 값
        // length : 배열의 길이

        // 서명 : Signature {
        //     r: BN {
        //       negative: 0,
        //       words: [
        //         23222721, 47312500,
        //         26535846,  5461930,
        //         34667260, 58334091,
        //          3702739,  6087569,
        //         15946217,  2682644
        //       ],
        //       length: 10,
        //       red: null
        //     },
        //     s: BN {
        //       negative: 0,
        //       words: [
        //         31861661, 34262777, 1159947, 39589246,
        //           721177, 55993598, 5302907, 60183962,
        //         53424270,    57741,       0,        0,
        //                0,        0,       0,        0,
        //                0,        0,       0,        0,
        //                0,        0,       0,        0,
        //                0,        0,       0,        0,
        //                0,        0
        //       ],
        //       length: 10,
        //       red: null
        //     },
        //     recoveryParam: 0
        //   }
    })
    it("검증하기",()=>{
        const hash = SHA256("transaction data").toString()
        const verify = ec.verify(hash,signature, ec.keyFromPublic(pubKey, "hex"));
        console.log("검증 됨? ,",verify)
    })
    // 지갑 주소 생성
    it("지갑 주소",()=>{
        // 계정을 만드는 방법은 만든 공개키의 값에서 26개의 문자열을 앞에서 잘라서
        // 40자리 만큼을 남겨서 주소로 사용한다
        // 불필요한 부분 제거하고 앞에 0x
        // 가독성 주소의 앞에는 0x 를 붙이는것이 일반적(16진수의 주소다 라는 뜻)
        const address = pubKey.slice(26).toString()
        console.log("지갑주소 : ",`0x${address}`)
    })
})

import Transaction from "@core/transaction/transaction";

describe("Transaction",()=>{
    let transaction : Transaction;

    // beforeEach : 테스트 케이스 실행 전에 실행되는 코드
    beforeEach(()=>{
        transaction = new Transaction();
    })

    describe("createTxOut",()=>{
        const account = "0".repeat(40)
        it("txOut 생성",()=>{
            // 임시 보내는 값
            const amount = 40

            // 트랜잭션 객체 사용
            // txOut 객테 하나 생성
            const txout = transaction.createTxOut(account,amount);

            console.log(txout)
            expect(txout.account).toBe(account)
            expect(txout.amount).toBe(amount)
        })

    })
    
})
