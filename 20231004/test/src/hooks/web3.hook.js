// use를 붙여야 한다  커스텀 훅 작성시
import {useState, useEffect} from "react"
import Web3 from "web3" 

// npm i web3
const useWeb3 = ()=>{
    // 현재 접속한 메타마스크 지갑 정보를 담을 변수
    const [user, setUser] = useState({
        account:"",
        balance:""
    });
    // 네트워크와 연결한 web3 인스턴스를 담을 변수
    const [web3, setWeb3] = useState(null)

    useEffect(()=>{
        // 확장프로그램 메타 마스크가 설치되어있는지 확인
        //ethereum 객체가 있는지 확인
        if(window.ethereum){
            // 로그인
            window.ethereum.request({
                method :"eth_requestAccounts",

            // 요청하고 응답 받으면 반환받은 배열의 값의 첫번째 갑이 필요
            // 배열 구조분해할당[data]
            }).then(async([data])=>{
                const web3Provider = new Web3(window.ethereum)
                setWeb3(web3Provider);
                setUser({
                    account : data,
                    // web3Provider.utils.toWei 요청을 보내고
                    // await web3Provider.eth.getBalance(data) 현재 지갑의 잔액을 조회해서
                    // 조회한 단위는 wei 단위
                    // ethet단위로 변경하자
                    balance : web3Provider.utils.toWei(await web3Provider.eth.getBalance(data),"ether")
                })
            })
        }else{
            alert("메타마스크 설치하세요")
        }
    },[])

    return {
        user,
        web3,
    }
}


export default useWeb3;