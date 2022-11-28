import React from 'react';
import { useRef } from "react";
import "../styles/register.css";
import meat from "../images/beef-supreme.png"

function Login() {
  const username = useRef();
  const password = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value)
  }
  
  return (
    <div className='body'>
    <div className='formContainer'>

      <div>
      <div className='imageContainer'>
        <div className='image'>
          <img src={meat} alt='meat' className='meat' />
        </div>
      </div>

          <div>
            <h1>Welcome back to the MEAT-Up!</h1>
              <div>
                <label> Username: </label>
                  <input 
                    type="text"
                    placeholder='username' 
                    className='username'
                    ref={username}
                  />
              </div>

              <div>
                <label> Password: </label>
                  <input 
                    type="password" 
                    placeholder='password'
                    className='password'
                    ref={password}
                  />
              </div>

            <button
              type='submit' 
              className='registerButton' 
              onClick={handleSubmit}
            >
            Log In
            
            </button> 
          
        </div>
        <br />
        Not a Member? <a href='/users/register'>Sign Up Here!</a>
      </div>


    </div>
    </div>
  )
}


export default Login