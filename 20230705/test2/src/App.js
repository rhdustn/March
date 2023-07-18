
import './App.css';
import { Main,Login,Shop } from './pages';
import {Routes, Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      {/* Routes => switch */}
      {/* 조건부 랜더링 Routes들의 부모 컴포넌트 */}
      {/* Route컴포넌트는 페이지를 정의해준다. 속성을 두개 주는데 
      path랑 element
      path : 브라우저의 경로 (컴포넌트 페이지를 바꿔서 보여줄 경로)
      element : path경로에 브라우저 걍로가 맞으면 이 속성에 넣은 컴포넌트를 보여준다*/}
     <Routes>
      <Route path='/' element ={<Main />} />
      <Route path='/login' element ={<Login />} />
      <Route path='/shop' element ={<Shop />} />
     </Routes>
    </div>
  );
}

export default App;
