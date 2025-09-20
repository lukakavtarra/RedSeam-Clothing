import React, { useState } from 'react'
import './Login.css'

import loginImage from '../../image/62bc5492a876268b6b9fc395f006a9259cafde47.png'
import eye from '../../image/eye.png'


import { Link, useNavigate } from 'react-router-dom'


async function LogToAcc() {


    const name = document.getElementById('nameOrUsername');
    const pass = document.getElementById('password');

    const navigate = useNavigate();

    try {
        const response = await fetch("https://api.redseam.redberryinternship.ge/api/login", {
            method: 'POST',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }),
            body: JSON.stringify({
                "email": name.value,
                "password": pass.value
            })
        });

        const isAccOk = await response.json();
        if (isAccOk.token) {
            localStorage.setItem('token', isAccOk.token)
            navigate("/")
        }

        console.log(isAccOk.token)
    } catch (err) {
        console.error(err.errors)
    }

}

const Login = () => {

    const [isVisible, setVisible] = useState(false);

    const toggleVisibility = () => {
        setVisible(!isVisible);
    };



    return (
        <div>
            <div className='flexBox' id='loginPage'>
                <img id='loginImage' src={loginImage} alt="loginImage" />
                <div>
                    <h2>Log in</h2>
                    <div className="input-wrapper">
                        <input id='nameOrUsername' type="text" placeholder='Email or username' required />

                        <input id='password' type={isVisible ? "text" : "password"} placeholder='Password' required />
                        <span className='toggle-password' onClick={toggleVisibility}><img src={eye} alt="visibleeye" /></span>

                        <input onClick={LogToAcc} id='logInButton' type="button" value="Log in" />

                        <p className='membership'>Not a member? <Link to='/register'><span>Register</span></Link> </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login