import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './navbar'
import Hero from './hero'
import { BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom';
import Login from './login'



function App() {
  const [showLogin, setShowLogin] = useState(false);
  

  return (  
    <>
    <Navbar></Navbar>
    <div>
      {showLogin ? <Login /> : <Hero onLoginClick={() => setShowLogin(true)} />}
    </div>

    
    
    
    </>
    
    
      
  )
}

export default App
