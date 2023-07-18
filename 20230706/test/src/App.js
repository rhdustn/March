
import './App.css';
import {Routes,Route, Navigate} from 'react-router-dom'
import {Detail,Login,Main,MyPage,Shop} from "./pages"
import {useState} from "react"
function App() {
  const [login,setLogin] =useState(false);
  const Redirect =()=>{
    //  Navigate : 브라우저의 경로를 바꿔준다
    // 페이지 리다이렉트 가능
    // mypage는 보호받는 페이지가 된다
    // 로그인이 안되어 있는 사애면 메인페이지로 이돈시킨다
    return login == true ? <MyPage login={login}/> : <Navigate to={'/'}/>;
  }
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Main login={login}/>}/>
      <Route path="/login" element={<Login login={login} setLogin={setLogin}/>}/>
      <Route path="/shop" element={<Shop login={login}/>}/>
      {/* 매개변수 id 는 데이터베이스의 id는 해당 상품의 id num은 해당상품의 번호 name 해당 상품의 이름 */}
      <Route path="/detail/:id/:num/:name" element={<Detail login={login}/>}/>
      {/* 로그인 상태일 경우에만 마이페이지에 접근할 수 있게 */}
      <Route path="/mypage" element={<Redirect />}/>
    </Routes>
    </div>
  );
}

export default App;
