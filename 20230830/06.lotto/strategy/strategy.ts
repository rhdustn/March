
import {AuthenticationResponse, Authenticator} from "./Authenticator"

interface IStrategy{
    // key를 문자열로 지정
    // key 가 동적으로 추가될 수 있고
    [key : number] : Authenticator
}

class Strategy{
    private strategy : IStrategy={}

    public set(key : number, lottoShow : Authenticator){
        // key 값을 받고 서비스 로직 추가
        this.strategy[key] = lottoShow; 
    }
    public async lotto(type : number) : Promise<AuthenticationResponse>{
        const result = await this.strategy[type].lottoShow();
        return result
    }
}

export default Strategy