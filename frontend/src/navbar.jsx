import React from 'react';
import './App.css'

const Navbar = () => {
  return (
    <nav className='nav'>
        <h1 className='site-title'>CureChain</h1>

        <div className='left-container'>
            <button className='signup-button'>
            Signup

        </button>
        <button className='login-button'>
            Login

        </button>
            
        </div>
        
        
    </nav>
    
  );
};

export default Navbar;