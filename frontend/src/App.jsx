import React from 'react'
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Home from './pages/Home.jsx'

const App = () => {
  return (
   <Router>
     <Navbar />
     <Routes>
       <Route exact path="/" element={<Home />} />
       <Route path='/login' element={<Login/>}/>
       <Route path='/signup' element={<Signup/>}/>
     </Routes>
   </Router>
  )
}

export default App
