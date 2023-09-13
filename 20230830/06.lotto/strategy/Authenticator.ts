export interface AuthenticationResponse{
    success : boolean
    result : Array<number>
}

export interface Authenticator{
    // 뽑은 번호를 보여주는 함수 lottoShow
   lottoShow():Promise<AuthenticationResponse>
}