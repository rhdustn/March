function login(id,pw){
    return(dispatch)=>{
        // 이부분에 데이터베이스 요청 응답 과정이 이곳에 들어가면 된다
        // async await
        // dispatch를 딜레이 시키기 위해서
        dispatch({type :"LOGIN",payload :{id, pw}})
    }
}
function logout(){
    return(dispatch)=>{
        dispatch({type :"LOGOUT"})
    }
}
// 새로운 방식으로 내보냄

export const logins ={login,logout}