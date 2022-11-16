import React from 'react'

function register() {
  return (
    <div className='register'>
        <h1>Register</h1>
        <label>Username: </label>
        <input type="text" />
        <br />
        <br />
        <label>Password: </label>
        <input type="text" />
        <br />
        <br />
        <labvel>Profile Picture: </labvel>
        <input type="text" />
        <br />
        <br />
        <button>Register</button>
    </div>
  )
}

export default register