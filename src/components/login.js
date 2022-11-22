import React, { Component } from 'react';
import "../styles/register.css";
import meat from "../images/beef-supreme.png"

class Login extends Component {
  // constructor(props){
  // super(props)}
  render() {
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
                    onChange={(e) => this.setState({ username: e.target.value })}
                  />
              </div>

              <div>
                <label> Password: </label>
                  <input 
                    type="text" 
                    placeholder='password'
                    className='password'
                    onChange={(e) => this.setState({ password: e.target.value })}
                  />
              </div>

            <button
              type='submit' 
              className='registerButton' 
              onClick={this.handleSubmit}
            >
            Register
            
            </button> 
          
        </div>
        <br />
        Already a Member? <a href='/login'>Sign In Here!</a>
      </div>


    </div>
    </div>
  )
}
}

export default Login