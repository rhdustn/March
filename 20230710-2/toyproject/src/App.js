import React from 'react'
import { Main, Login, Mypage, Order } from './pages'
import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'

const App = () => {

let isLogin = useSelector((state)=>{
  return state.isLogin
})

const Temp=()=>{
  const isLogin =true
  return isLogin ? <Login/> : <Navigate to={'/main'}/>
}
const Temp2=()=>{
  return isLogin ? <Mypage/> : <Navigate to={'/main'}/>
}
const Temp3=()=>{
  return isLogin ? <Order/> : <Navigate to={'/main'}/>
}

  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/main' element={<Main />} />
          <Route path='/login' element={<Temp />} />
          <Route path='/mypage' element={<Temp2 />} />
          <Route path='/order' element={<Temp3 />} />
    

        </Routes>

        {/* <Login></Login>
  <Mypage></Mypage>
  <Order></Order> */}
      </div>



    </BrowserRouter>


  )
}

export default App