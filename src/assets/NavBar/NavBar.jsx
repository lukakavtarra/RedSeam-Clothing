import React from 'react'

import './NavBar.css'

import handEye from '../../image/HandEye.png'
import user from '../../image/user.png'

import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div id='navBar'>
       <Link to='/  '><div id='logo'>
        <img src={handEye} alt="handEye" />
        <p>RedSeam Clothing</p>
        
        </div>
        </Link> 
        <div id='login'>
            <img src={user} alt="user" />
            {!localStorage.getItem('token') ? (
              <Link to='/login'>Login</Link>

            ) : (
              <p>test</p>
            )}
        </div>
    </div>
  )
}

export default NavBar