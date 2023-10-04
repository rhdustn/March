import  {Block}  from "@core/block/block"
import { GENESIS } from "@core/config"
import { Failable } from "@core/interface/failable.interface"

class Chain{
    private chain : Block[] = [GENESIS];
    private readonly INTERVAL = 10;

    // 현재 체인을 반환하는 함수
    get(){
        return this.chain;
    }

    // 길이를 반환하는 함수
    length(){
        return this.chain.length;

    }
    //체인에 마지막 블록 반환 함수
    latestBlock(){
        return this.chain[this.length()-1];
    }

    // 블록 추가 메서드
    addToChain(receivedBlock : Block){
        this.chain.push(receivedBlock);
        return this.latestBlock
    }
    // 블록을 조회하는 메서드
    getBlock(callbackFn : (block : Block)=>boolean){
        const findBlock = this.chain.find(callbackFn)
        if(!findBlock) throw new Error("찾은 블록이 없음")
        return findBlock;
    }
    // 블록의 높이로 블록을 조회하는 함수
    getBlockByHeight(height : number){
        return this.getBlock((block : Block)=>block.height === height)
    }

    // 블록의 해시로 찾는 함수
    getBlockByHash(hash : string){
        return this.getBlock((block : Block)=>block.hash===hash);
    }

    // 10번쨰 블록즐을 찾는 함수 현재 위치에서
    getAdjustBlock(){
        const {height} = this.latestBlock()
        const findHeight = height < this.INTERVAL ? 1 : Math.floor(height/this.INTERVAL)*this.INTERVAL;
        // 10번째들의 블록의 높이로 블록을 조회해서 반환
        return this.getBlockByHeight(findHeight)
    }
    // 다른 네트워크로 체인을 보낼때
    serialize(){
        return JSON.stringify(this.chain);
    }
    // 다른 네트워크로 체인을 받을때
    deserialize(chunk : string){
        return JSON.parse(chunk)
    }

    // 상대방 체인과 본인의 체일을 비교

    replaceChain(receivedChain : Block[]):Failable<undefined, string>{
        // 본인의 체인과 상대방의 체인을 검사하는 로직
        // 실제 네트워크에서는 더 복잡한 로직이 들어가 있겠지만 
        // 전체 배경이 중요하다 우리는 체인의 길이를 비교하는 로직을 구현할 것
        // 머클루트, 해시값, 체인 전체 검증 등등의 로직이 더 추가되어 있을건데
        // 중오한건 체인의 길이를 비교하는것 롱기스트 체인 룰

        // 상대방의 체인의 마지막 블록
        const latestReceivedBlock : Block = receivedChain[receivedChain.length-1];

        // 본인의 마지막 블록
        const latestBlock : Block = this.latestBlock()
        if(latestReceivedBlock.height===0)
        return {isError : true, value:"상대방 네트워크 체인은 마지막 블록이 최초 블록이다"}

        if(latestReceivedBlock.height <=latestBlock.height)
        return {isError : true, value:"상대방 네트워크의 체인보다 내 체인이 같거나 크다"}

        // 상대방의 체인이 내 체인보다 길면
        // 내 체인을 교체한다 전달받은 체인으로 업데이트
        this.chain = receivedChain;
        
        return {isError: false, value:undefined}
    }
    // 현재 블록 생성 시점에서 
    // 이전 -10번째 브록 구하기
    // 현재 높이 값 <10 : 최초 블록을 반환하고
    // 현재 높이 값 >10 : -10번째 블록을 반환
    // 이전 10번쨰 블록의 생성 시간의 차이를 구해서
    // 그 차이가 블록 생성 주기보다 빠르면 난이도 증가
    // 생성 주기가 느리면 난이도 하락
    // 비트코인 기준 블록의 생성시간은 10분당 1
    // 10개가 생성되는 시간은 100분
    // 100분보다 빠르면 난이도를 상승시키고
    // 느리면 난이도 하락 시킨다
    getAdjustmentBlock(){
        const currentLenght = this.length()
        const adjustmentBlock : Block = this.length()<this.INTERVAL ? GENESIS:this.chain[currentLenght-this.INTERVAL]
        //최초블록 or -10번째 블록 반환
        return adjustmentBlock
    }
}

export default Chain