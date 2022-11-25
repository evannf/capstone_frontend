// import React from 'react';
import { useRef } from 'react';
import "../styles/register.css";
import meat from "../images/beef-supreme.png";
import axios from 'axios';


function Register() {
  const username = useRef();
  const password = useRef();
  
  const handleSubmit = async (e)  => {
    e.preventDefault();
    const newUser = { 
      username: username.current.value,
      password: password.current.value,
    };
    console.log(username, password);

    try{
      await axios.post("/users/register", newUser);
    } catch (error) {
      console.log(error);
    }
};


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
            <h1>Join The MEAT-Up!</h1>
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
                    type="text" 
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
            Register
            
            </button> 
          
        </div>
        <br />
        Already a Member? <a href='/users/login'>Sign In Here!</a>
      </div>


    </div>
    </div>
  )
}


export default Register