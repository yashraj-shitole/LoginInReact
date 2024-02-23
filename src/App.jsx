import './App.css'
import Register from './Components/Register'
import Login from './Components/Login'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mongo from './Components/Mongo';


function App() {

  return (
    <>
    <BrowserRouter>
    
    <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/mongo" element={<Mongo/>} />

      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
