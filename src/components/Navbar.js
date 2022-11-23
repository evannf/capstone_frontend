import React from 'react';
import {Link} from 'react-router-dom';
import "../styles/navbar.css";


function Navbar() {
  return (
    <div className='navbar'> 
        <div className='links'>
            <Link to='/posts/all'>Home</Link>
            <Link to='/users/:id'>Profile</Link>
            <Link to='/users/:id/edit'>Edit Profile</Link>
            <Link to='/users/register'>Logout</Link>
        </div>
    </div>
  )
}

export default Navbar