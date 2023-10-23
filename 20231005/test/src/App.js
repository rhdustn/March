import { useEffect, useState } from "react"
import useWeb3 from "./hooks/web3.hook"
import abi from "./abi/Counter.json"

const App = ()=>{
  const {user, web3} = useWeb3()
  const [count, setCount] = useState(0)
  const [countContract, setCountContract] = useState(null)

  useEffect(()=>{
    if(web3 !==null){
      if(countContract === null){
        // web3.eth.Contract : 네트워크에 배포되어있는 컨트랙트를 조회하고 인스턴스로 생성해 둔다
        // 메소드를 통해서 네트워크에 상호작용을 할 수 있다.

        // web3.eth.Contract =(abi,CA, option)
        // {data :""} 빈값으로 일단 디폴트 옵션 추가
        const Counter = new web3.eth.Contract(abi,"0xBF090536eF4649e9471475482bf83d7dD827d7Bf",{data :"", from :""} );
        // 이후에 디폴트 옵션을 추가하고 싶다하면
        // 객체의 키값에 직접 추가해도 된다
        Counter.options.from ="0x000";
        setCountContract(Counter)
      }
    }
  },[web3])

  
  const getValue =async()=>{
    if(countContract===null) return;
    const result = web3.utils.toBigInt(await countContract.methods.getValue().call()).toString(10);
    setCount(result)
    console.log(setCount)
  };

const increment = async()=>{
  await countContract.methods.increment().send({
    from : user.account,
    data : countContract.methods.increment().encodeABI(),
  });
  getValue()
}
const decrement = async()=>{
  await countContract.methods.decrement().send({
    from : user.account,
    data : countContract.methods.decrement().encodeABI(),
  });
  getValue()
}

  useEffect(()=>{
    if(countContract !==null) getValue()
  },[countContract])
  if(user.account === null) return "연결된 지갑 주소가 없습니다"
  return(
    <>
    <div>{user.account}</div>
    <div>카운터 : {count}</div>
    <button onClick={increment}>증가</button>
    <button onClick={decrement}>감소</button>
    </>
  )
}

export default App