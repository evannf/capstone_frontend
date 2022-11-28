import React from 'react';
import { useContext, useRef } from "react";
import "../styles/register.css";
import meat from "../images/beef-supreme.png";
import { loginCall } from "../authCalls.js";
import { AuthContext } from "../context/AuthContext.js";

function Login() {
  const username = useRef();
  const password = useRef();
  const {user, error, dispatch} = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall({username: username.current.value, password: password.current.value}, dispatch)
  };
  console.log(user)
  
  return (
    <div className='body'>
    <form className='formContainer'>

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


    </form>
    </div>
  )
}


export default Login