import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {store} from "./store/store"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store} >
    <App />
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// react에서 불변성을 유지하는 코드를 작성할 수 있게 도와주는 라이브러리
// npm i immer

// react 에서 기본적으로 부모에서 받은 props를 내부의 상태인 state가 변경되었을때 다시 리랜더링을 하는데
// 이째도 props롸 state의 뱐걍을 불변성을 이용해서 감지한다
// 객체의 참조를 복사한다는 점을 이용해서 비교를 통해 변경이 이루어 진다
// ...state

// redux-toolkit

// npm i redux-toolkit
// npm install redux react-redux-

