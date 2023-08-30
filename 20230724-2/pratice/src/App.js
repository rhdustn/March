
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import {Login,SignUp} from "./pages"

function App() {
  return (

    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

   </BrowserRouter>

  );
}

export default App;
