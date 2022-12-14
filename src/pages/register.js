// import React from 'react';
import { useRef } from 'react';
import "../styles/register.css";
import meat from "../images/beef-supreme.png";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function Register() {
  const username = useRef();
  const password = useRef();
  const bio = useRef();
  // const profilePic = useRef();
  const nav = useNavigate();
  
  const handleSubmit = async (e)  => {
    e.preventDefault();
    const newUser = { 
      username: username.current.value,
      password: password.current.value,
      bio: bio.current.value,
      // profilePic: profilePic.current.value
    };
    console.log(username, password, bio);

    try{
      await axios.post("/register", newUser);
      nav('/login')
    } catch (error) {
      console.log(error);
    }
};


  return (
    <div className='body'>
    <div className='formContainer'>

      <form>
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
                    type="password" 
                    placeholder='password'
                    className='password'
                    ref={password}
                  />
              </div>
              <div>
                <label> Bio: </label>
                  <input 
                    type="text"
                    placeholder='bio' 
                    className='bio'
                    ref={bio}
                  />
              </div>
              {/* <div> */}
                {/* <label> Profile Picture: </label>
                  <input 
                    type="text"
                    placeholder='image address only' 
                    className='profliePic'
                    ref={profilePic}
                  />
              </div> */}

            <button
              type='submit' 
              className='registerButton' 
              onClick={handleSubmit}
            >
            Register
            
            </button> 
          
        </div>
        <br />
        Already a Member? <a href='/login'>Sign In Here!</a>
      </form>


    </div>
    </div>
  )
}


export default Register