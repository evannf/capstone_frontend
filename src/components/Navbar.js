import React from 'react';
import {Link} from 'react-router-dom';
import "../styles/navbar.css";


function Navbar() {
  return (
    <>
    <div className='navbar'> 
      <div className='logo'>
        <img src='/assets/beef-supreme.png' alt='logo' />
      </div>
      <div className='logoText'>
      Social Meatia
      </div>
        <div className='links'>
            <Link to='/'>Home</Link>
            {/* <Link to={`/profile/${user.username}`}>Profile</Link> */}
            {/* <Link to={`/profile/${user.username}`}>Profile</Link> */}
            <Link to='/users/:username/edit'>Edit Profile</Link>
            <Link to='/register'>Logout</Link>
        </div>

    </div>

    </>
  )
}

export default Navbar