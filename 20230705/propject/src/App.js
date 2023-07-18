import React from 'react';
import { Container,Block} from "./component/Project"
import './App.css';

// 지뢰찾기게임
// 필요한 컴포넌트
// 전체 3x3칸
// 플레이어가 한 칸을 클릭하면 그 안에 지뢰가 있는지 없는지
// 지뢰는 랜덤하게 위치

function App() {
  // 유저의 선택을 담을 함수
  // const [userSelect, setUserSelect] =useState(null)
  return (
    <>
    <div className="App">
      지뢰찾기 게임
    </div>
    <Container />
   
    </>
  );
}

export default App;
