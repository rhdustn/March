import {UserParams} from "../interface/login.request"
import {AuthenticationResponse, Authenticator} from "./Authenticator"

// 전략패턴 객체 구조 정의
interface IStrategy{
    // key를 문자열로 지정
    // key 가 동적으로 추가될 수 있고
    [key : string] : Authenticator
}

// 서비스 로직들을 가질 객체 구조 정의
class Strategy{
    private strategy : IStrategy={}

    // 서비스 로직을 객체에 추가할 함수
    public set(key : string, authentcate : Authenticator){
        // key 값을 받고 서비스 로직 추가
        this.strategy[key] = authentcate; 
    }
    public async login(type : string, credentials : UserParams) : Promise<AuthenticationResponse>{
        // google, {email, password}
        const result = await this.strategy[type].authentcate(credentials);
        return result
    }
}

export default Strategy