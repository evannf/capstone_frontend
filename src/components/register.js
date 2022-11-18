import React, { Component } from 'react';
import "../styles/register.css";
import meat from "../images/beef-supreme.png"


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      img: ""
    };
    //use of bind() necessary to make 'this' work in the callback
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const { username, password, img } = this.state;
    console.log(username, password, img);
    fetch("http://localhost:3001/register", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
        img,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
      });
  }

  render(){
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

export default Register