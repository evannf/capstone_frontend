import React, { Component } from 'react'

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
    <form className='register' onSubmit={this.handleSubmit}>
        <h1>Register</h1>
        <label>Username: </label>
        <input 
          type="text"
          placeholder='username' 
          onChange={(e) => this.setState({ username: e.target.value })}
        />
        <br />
        <br />
        <label>Password: </label>
        <input 
          type="text" 
          placeholder='password'
          onChange={(e) => this.setState({ password: e.target.value })}
        />
        <br />
        <br />
        <label>Profile Picture: </label>
        <input
          type="text"
          placeholder="link to profile img"
          onChange={(e) => this.setState({ img: e.target.value })}
        />
        <br />
        <br />
        <button type='submit'>Register</button>
    </form>
  )
}
}

export default Register