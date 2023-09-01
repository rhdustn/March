import {UserParams} from "../interface/login.request"
import {AuthenticationResponse, Authenticator} from "./Authenticator"

// 검증객체구조 상속
// 카카오 로그인 검증 클래스 정의
export class KakaoAuthentiactor implements Authenticator{
    async authentcate(credentials: UserParams): Promise<AuthenticationResponse> {
        // 카카오 로그인 로직
        console.log("kakao loign 성공")
        return {success : true}
    }
}