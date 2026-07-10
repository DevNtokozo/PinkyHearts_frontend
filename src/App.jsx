import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import ParentDashboard from './pages/ParentDashboard'

const App = () => {
  return (
    <div>
      <Route path="/" element={<Home />} />

     <Route path="/about" element={<About/>} />

     <Route path="/programs" element={<Programs />} />

     <Route path="/contact" element={<Contact />} />

     <Route path="/login" element={<Login />} />

     <Route path="/register" element={<Register />} />

     <Route path="/dashboard" element={<ParentDashboard />} />
    </div>
  )
}

export default App
