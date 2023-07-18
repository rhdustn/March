// ES6 문법을 사용

// require로 파일을 가져왔는데 모듈을 가져왔는데
// import가 생김
class LoginBtn extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            isLogin :false
        }
    }
    render() {
        return(
            <button onClick={
                () =>{this.setState({isLogin :!this.state.isLogin})}
            }>{this.state.isLogin ? "Logout" : "Login"}
            </button>
        )
    }
}

// nodejs에서는
// 내보낼 컴포넌트가 여러개일 경우
// export  {LoginBtn,LoginBtn2}

// 단일 한개만 내보낼 경우
export default LoginBtn