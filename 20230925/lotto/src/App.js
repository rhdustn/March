
import './App.css';
import {useEffect, useState} from "react"
import Web3 from "web3"
function App() {
// 1. 컨트랙트 배포 
// 2. 로또 번호 조회
const [account, setAccount] = useState(null)
const [web3, setWeb3] = useState(null)
const [balance, setBalance] = useState(0)

useEffect(()=>{
  (async()=>{
    const [data] = await window.ethereum.request({
      method : "eth_requestAccounts"
    })
    console.log(data)
    setWeb3(new Web3(window.ethereum))
    setAccount(data)
  })()
}, [])

const balanceBtn =async()=>{
  const balance = await web3.eth.getBalance(account)
  const _balance = await web3.utils.fromWei(balance,"ether")
  setBalance(_balance)
 }

 const sendTransactionBtn= async () => {
  console.log(document.querySelector("#test").value
  )
  console.log(account)
  const data =  await web3.eth.sendTransaction({
       // 컨트랙트 배포자 계정
       
       from: account,
       // gas 제한량
       gas: "3000000",
       data: document.querySelector("#test").value
 
     })
     // CA : "0x481e88c020549295e9c4cc44cd1438853e86641d"
     console.log(data)
 }

 const abi =[
  {inputs:[],stateMutability:"nonpayable",type:"constructor"},
 {inputs:[],name:"getValue",
  outputs:[{internalType:"uint256",name:"",type:"uint256"}],
  stateMutability:"view",type:"function"},
  {inputs:[{internalType:"uint256",name:"_value",type:"uint256"}],
  name:"setValue",outputs:[],
  stateMutability:"nonpayable",type:"function"}]
  return (
    
    <div className="App">
       {account || "로그인 하셈"}<br/>
    {balance}ETH<br/>
    <button onClick={balanceBtn}>잔액 조회</button><br/><br/>
    <button onClick={sendTransactionBtn}>컨트랙트 배포</button>
    <div></div>
    <textarea id='test'></textarea>
    </div>
  );
}

export default App;
