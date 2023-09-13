import {UserParams} from "../interface/login.request"
import {AuthenticationResponse, Authenticator} from "./Authenticator"

// 검증객체 구조 상속
export class EmailAuthenticator implements Authenticator{
   async authentcate(credentials: UserParams): Promise<AuthenticationResponse> {
    console.log(credentials)
        // 이메일 로그인 로직 작성 부분
        console.log("email login 성공")
        // 반환값의 객체는 AuthenticationResponse 인터페이스로 정의 해 놓은 것
        return {success : true}
    }
}