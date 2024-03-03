import React from 'react';
import { useState } from 'react'
import './App.css'
import Login from './login';
import { render } from 'ejs';
import App from './App';

const Hero = (props) => {

    
  return (
    <div>
        <div className='hero-container'>
        <p id='hero-1'>Welcome to CureChain Connect</p>
        <p id='hero-2'>Login is Linked To Your Metamask Account</p>

      </div>
      <div>
        <button onClick={props.onLoginClick} className='hero-login-button'>
            LOGIN

        </button>
        

    
        
      </div>

    </div>
       
        
    
  );
};

export default Hero;

