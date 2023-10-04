import {useEffect, useState} from "react"
import './App.css';
import Web3 from "web3"

function App() {
    const [account, setAccount] = useState(null)
    const [web3, setWeb3] = useState(null)
    const [balance, setBalance] = useState(0)

    useEffect(()=>{
      (async()=>{
        const [data] = await window.ethereum.request({
          method : "eth_requestAccounts"
        })
        console.log(data)
        // 0x3E673971D5Ae5BBA4212EfCBe39f8b884BDfe01f
        setWeb3(new Web3(window.ethereum))
        setAccount(data)
      })()
}, [])

const balanceBtn =async()=>{
 const balance = await web3.eth.getBalance(account)
 const _balance = await web3.utils.fromWei(balance,"ether")
 setBalance(_balance)
}
// 카운트 앱
// 스마트 컨트랙트 배퍼


// 트랜잭션 EOA -> EOA
// 잔액 송금 버튼
const sendTransactionBtn= async () => {
 const data =  await web3.eth.sendTransaction({
      // 컨트랙트 배포자 계정
      
      from: account,
      // gas 제한량
      gas: "3000000",
      data: "608060405234801561001057600080fd5b50610150806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063209652551461003b5780635524107714610059575b600080fd5b610043610075565b60405161005091906100a1565b60405180910390f35b610073600480360381019061006e91906100ed565b61007e565b005b60008054905090565b8060008190555050565b6000819050919050565b61009b81610088565b82525050565b60006020820190506100b66000830184610092565b92915050565b600080fd5b6100ca81610088565b81146100d557600080fd5b50565b6000813590506100e7816100c1565b92915050565b600060208284031215610103576101026100bc565b5b6000610111848285016100d8565b9150509291505056fea2646970667358221220e430f36c2e65b21527bed968167266853f5345eaff0e59709d78cc2db22668c864736f6c634300080d0033"

    })
    console.log(data.contractAddress)
}
const abi = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  { // inputs 매개변수 안받으니 빈 문자열 []
      inputs: [],
      // 함수의 이름 getValue
      name: "getValue",
      // outputs 함수의 출력의 내용
      // internalType : 상태변수의 함수의 값에 대한 타입
      // name : 사용하는 매개변수의 이름
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      // stateMutability == view 상태변경을 하지 않고 view 속성 조회만 한다
      stateMutability: "view",
      // type == function 함수타입
      type: "function"
  },
  {
      // 매개변수 받으니까 []
      // internalType 함수의 값에 대한 타입
      // name 사용하는 매개변수 이름 _value,
      inputs: [{ internalType: "uint256", name: "_value", type: "uint256" }],
      // 함수의 이름 setValue
      name: "setValue",
      // 함수의 출력은 없으니 빈배열
      outputs: [],
      // stateMutability === nonpaybale 이더리움을 받지 않는 상태 전환함수
      stateMutability: "nonpayable",
      // type == function 함수타입
      type: "function"
  },
];

const getValue = async () => {
  const getCodeHash = await web3.eth.abi.encodeFunctionCall(abi[1], [])
  console.log(getCodeHash)
  // call 읽기 전용
  // 원격 프로시저 호출 값을 조회
  const data = await web3.eth.call({
      to: "0xbC790a30060A5E5f5499eeBe0892a05a747620C0",
      data: getCodeHash,
  })
  console.log(data)
  // const result = await web3.utils.toBN(data).toString(10);
  const result = parseInt(data.toString(10));
  console.log(result)
  document.querySelector("#counterValue").innerHTML = result
  return parseInt(result)
}
// 상태변수를 조회했고
getValue()


const setValue = async () => {
  const _getValue = await getValue()
  const setCodeHash = await web3.eth.abi.encodeFunctionCall(abi[2], [_getValue + 1])
  console.log(setCodeHash)
  if (!document.querySelector("#useAccount").value) return alert("Account 입력 해주세요")
  const tx = {
      from: document.querySelector("#useAccount").value,// 트랜잭션을 발생시키는 계정
      to: "0xbC790a30060A5E5f5499eeBe0892a05a747620C0",// CA계정 주소
      data: setCodeHash,
      gas: 500000,
      gasPrice: 20000000
  };
  const data = await web3.eth.sendTransaction(tx)
  console.log(data);
  getValue()
}

const decreaseValue = async () => {
  const _getValue = await getValue();
  const setCodeHash = await web3.eth.abi.encodeFunctionCall(abi[2], [_getValue - 1]);

  if (!document.querySelector("#useAccount").value) return alert("Please enter Account");

  const tx = {
      from: document.querySelector("#useAccount").value,
      to: "0xbC790a30060A5E5f5499eeBe0892a05a747620C0",
      data: setCodeHash,
      gas: 500000,
      gasPrice: 20000000
  };

  const data = await web3.eth.sendTransaction(tx);
  console.log(data);
  getValue();
};

const toAddress = async ()=>{
  const sendAmount =await web3.utils.toWei(document.querySelector("#cash").value, 'ether');

const txHash = await web3.eth.sendTransaction({
    from: account,
    to: document.querySelector("#toAccount").value,
    value: sendAmount
});
console.log(txHash)

}



  return <div className ="App">
{/* 지갑의 내용을 가지고 계정 조회 */}
    {account || "로그인 하셈"}<br/>
    {balance}ETH<br/>
    <button onClick={balanceBtn}>잔액 조회</button><br/><br/>
    <button onClick={sendTransactionBtn}>컨트랙트 배포</button>
    <div>
    <label for="">use Account</label><br />
    <input type="text" id="useAccount"></input>
    </div>
        <div>카운트 앱</div>
        <div id="counterValue"></div>
        <button id="callBtn" onClick={getValue}>조회</button>
        <button id="sendBtn" onClick ={setValue} >증가</button>
        <button id="decreaseBtn" onClick ={decreaseValue}>감소</button>

        <div>
          <label>to</label>
          <input type="text" id="toAccount"></input>
          <label>금액</label>
          <input type="text" id="cash"></input>
          
          <button id="toBtn" onClick={toAddress}>보내기</button>
        </div>
  </div>

}

export default App;
