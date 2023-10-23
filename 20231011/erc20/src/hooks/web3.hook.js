import {useEffect, useState} from "react"
import Web3 from "web3"

const useWeb3 =()=>{
    const [user, setUser] = useState({
        account :"",
        balance:""
    })

    const [web3, setWeb3] = useState(null);

    useEffect(()=>{
        if(window.ethereum){
            window.ethereum.request({method :"eth_requestAccounts"}).then(async([data])=>{
                console.log(data)
                const web3Provider = new Web3(window.ethereum)
                setUser({
                    account : data,
                    balance : "0"//web3Provider.utils.toWei( await web3Provider.eth.getBalance(data),"ether"),
                });

                setWeb3(web3Provider)
                // 웹 메타마스크 다 뜰꺼고
                // 그 지갑에 있는 토큰 량을 다 보여주고
                // 컨트랙트를 배포한 네트워크가 맞는지 아니면 네트워크 변경할 수 있게 함수실행
                // 지갑을 바꾸면 바꾼 지갑 내용으로 브라우저에 보일 수 있게
            });
        }else{
            alert("메타마스크 설치해주세요")
        }
    },[])
    return {user, web3};
}

export default useWeb3;