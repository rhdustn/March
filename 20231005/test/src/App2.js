import { useEffect, useState } from "react"
import useWeb3 from "./hooks/web3.hook"
import abi from "./abi/Baseball.json"

const App2 = () => {
    const { user, web3 } = useWeb3();
    const [ticket, setTicket] = useState("0")
    
    const [value, setValue] = useState("")


    const [reward, setReward] = useState("0")

    const [progress, setProgress] = useState("0")

    
    const [random, setRandom] = useState("000")


    const [message, setMessage] = useState("")

    const [owner, setOwner] = useState("")

    // owner 주소를 저장할 상태 추가
    const [ownerAddress, setOwnerAddress] = useState("")

    const [baseballContract, setBaseballContract] = useState(null);

    useEffect(() => {
        if (web3 !== null) {
            if (baseballContract === null) {
                const Baseball = new web3.eth.Contract(abi, "0xe6cb2d3680e3D31Fd1eDbf1133b9cAA124e22895", { data: "" })
                setBaseballContract(Baseball);
            }
        }
    }, [web3])

    const getTicket = async () => {
        if (baseballContract === null) return
        const result = web3.utils.toBigInt(await baseballContract.methods.getTicketPrice().call()).toString(10);
        setTicket(await web3.utils.fromWei(result, "ether"))
        
    };


    const getOwnerAccount = async ()=>{
        const result2 = (await baseballContract.methods.getContractOwner().call()).toString(10);
        setOwnerAddress(result2.toLowerCase())
        console.log(result2)
    }

    const getReward = async () => {
        if (baseballContract === null) return
        const result = web3.utils.toBigInt(await baseballContract.methods.getReward().call()).toString(10);
        setReward(await web3.utils.fromWei(result, "ether"))
    };

    const getPlaying = async () => {
        const playing = web3.utils.toBigInt(await baseballContract.methods.getPlay().call()).toString(10);
        setMessage(playing)
    }

    const getProgress = async () => {
        const progress = web3.utils.toBigInt(await baseballContract.methods.getProgress().call()).toString(10)
        setProgress(progress)
    }

    const getRandom = async () => {
        const random = web3.utils.toBigInt(await baseballContract.methods.getRandom().call()).toString(10)
        setRandom(random)
    }

    const gameStart = async () => {
        if (value.length < 3) {
            alert("Enter 3 digit number")
            return
        }
        await baseballContract.methods.gameStart(Number(value)).send({
            from: user.account,
            value: web3.utils.toWei("5", "ether"),

        })
        render()
    }

    const gameReset = async () => {
        if (user.account === null) {
            alert("지갑과 연결해주세요");
            return;
        }
        const confirmReset = window.confirm("재시작 하시겠습니까?");

        if (confirmReset) {
            await baseballContract.methods.gameReset().send({
                from: user.account,
            });

            // setTicket("0");
            // setValue("");
            // setReward("0");
            // setProgress("0");
            // setMessage("");

            render();
        }
    }


    const render = () => {
        getTicket();
        getReward()
        getPlaying()
        getProgress()
        getOwnerAccount()

    }

    useEffect(() => {
        if (baseballContract !== null) {
            render()
        }
    }, [baseballContract]) 
     //  어드민만 보이게
    const getRandomButton = () => {
        if (baseballContract !== null && user.account === owner.account) {
            return <button onClick={getRandom}>admin</button>;
        }
        return null
    }

    useEffect(()=>{
        console.log(user.account,'asd')
        console.log(ownerAddress,'addsd')
    },[ownerAddress])
    if (user.account === null) return "지갑의 계정을 확인해 주세요"

  
    return (
        <>
            <div>account : {user.account}</div>
            <div>티켓가격: {ticket}</div>
            <div>현재 게임 진행도: {progress} /5</div>
            <div>총 상금: {reward}</div>
            <div>진행중 ? : {message == 0 ? "게임중" : "게임 종료"}</div>
            <input onChange={(e) => { setValue(e.target.value) }}></input>

            <div>정답 :  {random}</div>
            <button onClick={gameStart}>게임시작</button>
            <br />
            
            {ownerAddress==user.account && <button onClick={getRandom}>admin</button>}
            <br />
            <button onClick={gameReset}>재시작</button>
        </>
    )
}

export default App2