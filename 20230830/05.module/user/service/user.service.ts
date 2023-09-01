import { promises } from "dns";
import { UserParams } from "../interface/login.request";
import{AuthenticationResponse} from '../strategy/Authenticator'
import Strategy from "../strategy/strategy";

// 유저의 서비스 로직 클래스 정의
class UserService{
    // 전략패   턴 유저 로그인 서비스 로직 객체
    // 이메일, 카카어, 구글 세가지 로그인 로직을 사용할 것
    constructor(private readonly strategy : Strategy){}

    async login(type : string, credentials : UserParams) :  Promise<AuthenticationResponse>{
        // google ,{ email, password}
        const result = await this.strategy.login(type, credentials)
        return result
    }
}
export default UserService