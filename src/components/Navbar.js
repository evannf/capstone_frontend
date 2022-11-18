import "../styles/navbar.css";
import React, { useEffect, useState } from 'react';
import {Link, useLocation} from 'react-router-dom';

function navbar() {
  return (
    <div className='navbar'> 
        <div className='links'>
            <Link to='/posts/all'>Home</Link>
            <Link to='/users/login'>Login</Link>
            <Link to='/users/register'>Register</Link>
        </div>
    </div>
  )
}

export default navbar
