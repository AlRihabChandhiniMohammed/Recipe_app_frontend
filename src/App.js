import React from 'react'
import Navbar from "./component/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { BrowserRouter as Router,Route,Routes,Navigate } from 'react-router-dom';
import "./App.css"
const App = () => {
  const isAuthenticated = false;
  return (
    <Router>
      <Navbar />
      <Routes>
        {/*Redirect to Login if not logged in */}
        <Route path="/" element={isAuthenticated ? <Home /> : <Navigate replace to="/login" />} />
        <Route path="/Login" element={<Login />}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
