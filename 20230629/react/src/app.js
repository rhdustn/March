// es6 문법
// {LoginBtn}
// ./components/LoginBtn에서
// export {LoginBtn} 이렇게 작성
// import {LoginBtn} from "./components/LoginBtn";

// 가져와서 Login명으로 사용
import Login from "./components/LoginBtn"

// 루트요소 가상 DOM으로 생성
// 루트 생성
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Login />)