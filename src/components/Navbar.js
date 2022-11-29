import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import "../styles/navbar.css";


function Navbar() {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.clear();
    window.location.reload(false)
  } 
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
            <button className='logout' onClick={logout}> Logout </button>
        </div>

    </div>

    </>
  )
}

export default Navbar