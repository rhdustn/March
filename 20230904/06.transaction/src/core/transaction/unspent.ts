import { TransactionData, TransactionRow, TxIn, txOut, UnspentTxOut, UnspentTxOutPool } from "./transaction.interface"

// UTXO 
// 각 노드의 UTXO 데이터 베이스
// 각 주소별로 가지고 있는 잔액 금액을 가지고 있는 객체의 내용이 포함 되어 있다

// a가 b에게 1비트를 보내면
// 트랜잭션을 발생 시키고
// txIn에 이전 트랜잭션에서 남은 미사용 객체 UTXO 를 참조해서 (A가 얼마 가지고 있는지 확인 잔액)
// txOut 결과물의 utxo 객테를 만들어 놓고
// 보내는 금액보다 많이 가지고 있으면 트랜잭션을 승인
// UTXO 에 결과로 생성된 작액과 주소를 포함한 객체를 추가

class Unspent {
    // utxo 객체들 목록
    // 누가 얼마를 가지고 있는지의 내용이 배열로 담겨있다
    // 미사용 객체들이 담겨있을 예정
    private readonly unspendTxOuts:UnspentTxOutPool = [];
    constructor() { }

    // get UTXO의 내용을 반환하는 함수
    getUnspentTxPool() {
        return this.unspendTxOuts;
    }
    // 미사용 객체를 txIn에서 참조할 때 객체를 조회하는데
    // 사용하고나면 객체를 값을 수정하는데 아니라 한번도 사용하지 않은 객체들이 UTXO에 담겨있고
    // 사용을 하면 제거
    delete(txin: TxIn) {
        const { txOutId, txOutIndex } = txin;
        const index = this.unspendTxOuts.findIndex((unspendTxOut: UnspentTxOut) => {
            return (
                unspendTxOut.txOutId === txOutId && unspendTxOut.txOutIndex === txOutIndex
            )
        })
        // 미사용 객체 검증

        // unspendTxOuts에서 찾은 값을 제거
        if (index !== -1) this.unspendTxOuts.splice(index, 1)
    }
    // 새로운 객테가 생성이 되면
    // txout 정보를 가지고 UTXO에 생성 목록에 추가
    create(hash: string) {
        return (txout: txOut, txOutIndex: number) => {
            const { amount, account } = txout;
            this.unspendTxOuts.push({
                txOutId: hash, // 트랜잭션의 해시
                txOutIndex,
                account,
                amount
            })
        }
    }
    // 트랜잭션 업데이트 UXTO의 내용을 업데이트 하는 메서드
    update(transaction : TransactionRow){
        // 처리되는 트랜잭션 내용
        // txIns 입력값 누가 누구에세 송금하는지 내용 잔액 확인
        // txOuts 누가 받았는디 account, amount 잔액 주소
        // hash 트랜잭션 식별자 고유값
        const {txIns, txOuts, hash} = transaction

        if(!hash) throw new Error("hash 가 정상적이지 않음")

        // 트랜잭션 출력 값을 UTXO 에 추가
        // 목록에 추가 미사용 객체
        txOuts.forEach(this.create(hash))

        // 사용한 객체 제거
        // UXTO목록에서 사용한 객체들은 제거
        // bind 현재 작성된 위치의 객체를 참조
        txIns.forEach(this.delete.bind(this))
    }

    // 특정 계정(account)의 객테를 utxo에서 목록을 조회
    getUTXO(account : string) : UnspentTxOut[]{
        // 계정의 잔액의 정보를 가지고 있는 객체를 모두 조회하는 함수
        const myUnspentTxOuts = this.unspendTxOuts.filter((utxo)=>
           // utxo에 있는 요소들을 순회하면서
           // account가 찾는 account매개변수 값이랑 같으면
            utxo.account === account
        )
        return myUnspentTxOuts;
    }
    // 특정 계정의 잔액 금액의 총 합을 조회하는 매서드
    getAmount(myUnspentTxOuts : UnspentTxOut[]){
        // reduce
        // 초기값은 0으로 매개변수 두번째로 전달
        // 첫번째 매개변수로 콜백함수
        // 콜백함수의 텃번째 매개변수는 누적 값 순회하고 변한 누적 값
        // 콜백의 두번째 매개변수는 현재 순회하는 요소
        // 값의 합을 내보낸것
        return myUnspentTxOuts.reduce((acc,utxo)=>acc +utxo.amount,0)
    }

    // 주어진 계정의 잔고가 보낸느 금액보다 큰지 검증
    isAmount(account : string, sendAmount : number){
        // 내 주소와 잔액 정보가 있는 사용하지 않은 객체 조회
        const myUnspentTxOuts = this.getUTXO(account);
        //  totalAmount 총 잔액
        const totalAmount = this.getAmount(myUnspentTxOuts)

        // 계정의 총 잔고가 보내는 금액보다 크면 true
        // 아니면 false로 못보냄
        if(totalAmount > sendAmount) return true
        return false
    }
}

export default Unspent