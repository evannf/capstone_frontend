import React from 'react'

function login() {
  return (
    <div className='login'>
        <h1>Login</h1>
        <label>Username: </label>
        <input type="text" />
        <br />
        <br />
        <label>Password: </label>
        <input type="text" />
        <br />
        <br />
        <button>Login</button>
    </div>
  )
}

export default login