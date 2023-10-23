import { useEffect, useState } from "react";
import useWeb3 from "./hooks/web3.hook";
import abi from "./abi/Poketmon.json";
const App = () => {
  const { user, web3 } = useWeb3();
  const [contract, setContract] = useState(null);
  const [token, setToken] = useState("0");

  const [accounts, setAccounts] = useState([]);
  const [lists, setList] = useState([]);
  

  useEffect(() => {
    if (web3 !== null) {
      if (contract) return;
      const pokenmon = new web3.eth.Contract(abi, "0x05Cd273496e556BB53852E4d8255C51Bac8a33d6", { data: "" });
      setContract(pokenmon);
    }
  }, [web3]);

  // 해당 지갑의 포켓몬 조회
  const getPokenmon = async (account) => {
    const result = contract.methods.getPokenmon().call({
      from: account,
    });
    return result;
  };

  // 지갑의 토큰량 조회
  const getToken = async (account) => {
    if (!contract) return;
    let result = web3.utils.toBigInt(await contract.methods.balanceOf(account).call()).toString(10);
    result = await web3.utils.fromWei(result, "ether");
    return result;
  };

  // 메타마스크 계정들 조회
  const getAccounts = async () => {
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    const _accounts = await Promise.all(
      accounts.map(async (account) => {
        const token = await getToken(account);
        const pokenmon = await getPokenmon(account);
        // 추가로 포켓몬들도 어떤 포켓몬을 가지고있는지 추가할 부분
        return { account, token, pokenmon };
      })
    );

    setAccounts(_accounts);
  };

  // 포켓몬 랜덤으로 뽑을수있는 함수
  const randomPokenmon = async () => {
    console.log("여기 찍힘????")
    try {
      if (!user.account) {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        web3({ ...user, account: accounts[0] });
      }
  
      if (contract && user.account) {
        await contract.methods.buyPokenmon().send({
          from: user.account
        });
        alert("포켓몬을 랜덤으로 뽑았습니다!");
        await getAccounts();
      }
    } catch (error) {
      console.error("포켓몬 랜덤 뽑기 오류:", error);
    }
  };

  // 포켓몬 한번이라도 뽑은 계정들만 모아놓는 함수
  const getAccountList = async () => {
    console.log("뽑은 계정 버튼임")
    const lists = accounts.filter((item) => item.pokenmon.length > 0);
    setList(lists);
    console.log(lists)
  };

  // 포켓몬 넘기기
  const transferRandomPokenmon = async () => {
    try {
      const toAccount = document.getElementById("toAccountInput").value;

      console.log(toAccount)
      if (!toAccount) {
        alert("받을 계정을 입력하세요.");
        return;
      }
      if (!web3.utils.isAddress(toAccount)) {
        console.log("ssssssssss",web3.utils.isAddress(toAccount))
        alert("올바른 주소 아님.");
        return;
      }
      if (contract && user.account) {
        await contract.methods.transferPoke(toAccount).send({
          from: user.account
        });
        alert("포켓몬을 전송!");
        await getAccounts();
      }
    } catch (error) {
      console.error("포켓몬 전송 오류:", error);
    }
  };
  


  // 1. 포켓몬 랜덤으로 뽑을수있는 함수를 만들고(버튼) //ok
  // 2. 포켓몬 한번이라도 뽑은 계정들만 모아놓고 어떤 포켓몬을 가지고있는지 보여주기
  // 3. 포켓몬 소유권 넘길수 있는 함수 만들기.
  // 랜덤으로 넘기자
  
  // 4. 포겟몬 대전
  // 5. 보상개념도 추가해도 되고

  useEffect(() => {
    if (!contract) return;
    getAccounts();
  }, [contract]);

  if (user.account === null) return "지갑 연결하세요";
  return (
    <>
      {/* <div>토큰 보유량 : {token}</div> */}
      {accounts.map((item, index) => (
        <div key={index}>
          계정 : {item.account}=토큰 값 : {item.token}
          <div style={{ display: 'flex' }}>
            포켓몬들 <br />
            {item.pokenmon.map((item, index) => (
              <div key={index}>
                <img style={{ margin: '10px' }}width={80} src={item.url} alt="" />
              </div>
            ))}
          </div>
        </div>
      ))}

      <div>=========================================================</div>
      <button onClick={randomPokenmon}>포켓몬 랜덤 뽑기</button>
      <div>=========================================================</div>
      포켓몬 소유권 넘기기
      <br/>
      포켓몬을 받을 계정 : <input id="toAccountInput" /> 
      <button onClick={transferRandomPokenmon}>랜덤 포켓몬 전송</button>
      <div>=========================================================</div>
      
      
      <button onClick={getAccountList}>뽑은 계정 보기</button>
      {lists.length > 0 && (
        <div>
          뽑은 계정 목록:
          {lists.map((item, index) => (
            <div key={index}>
              계정 {item.account} - 포켓몬 수: {item.pokenmon.length}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default App;