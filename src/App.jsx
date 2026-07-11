import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Parents from './pages/Parents'
import Children from './pages/Children'
import Payments from './pages/Payments'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/parents" element={<Parents />} />

      <Route path="/children" element={<Children />} />

      <Route path="/payments" element={<Payments />} />       

          

     <Route path="/login" element={<Login />} />

     <Route path="/register" element={<Register />} />

     
    </Routes>
  )
}

export default App
