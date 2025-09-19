import React from 'react'
import registerImage from '../../image/62bc5492a876268b6b9fc395f006a9259cafde47.png'

import { useForm, SubmitHandler } from 'react-hook-form'

import { MdCameraAlt } from "react-icons/md";


import './Register.css'

const Register = () => {


    const {
        watch,
        register,
        unregister,
        handleInput
    } = useForm({
        defaultValues: {
            avatar: "",
            email: "",
            username: "",
            password: "",
            password_confirmation: ""
        },
    });

    const UnregisterAvatar = () => {
        unregister("avatar")
    }

    const RegisterAvatar = () => {
        register("avatar")
    }
    const customerAvatar = watch("avatar")
    
    return (
        <div id='registration'>
            <div className='flexBox' id='loginPage'>
                <img id='loginImage' src={registerImage} alt="loginImage" />
                <div>
                    <h2>Registration</h2>
                    <div id='' className="input-wrapper">
                        <div id='avatar_input'>
                            {customerAvatar ? (
                                <div id='uploaded'>
                                <label htmlFor='image-file'>
                                    <div className="circle">
                                        {customerAvatar[0] ? (
                                            <img id='avatar_image' src={URL.createObjectURL(customerAvatar[0])} alt="avatar" />
                                        ):console.log(customerAvatar[0])}
                                    </div>
                                    <span>Upload new</span>
                                </label>
                                    <span onClick={UnregisterAvatar}>Remove</span>
                                </div>
                            ) :
                                <label htmlFor='image-file'>
                                    <div className='circle' >
                                        < MdCameraAlt id='avatar_icon' />
                                    </div> Upload Image</label>
                            }
                            <input className='no_display' type="file" id="image-file" accept="image/jpeg" {...register("avatar")} />

                        </div>
                        {/* <label for="image-file">Upload Image</label> */}
                        <input id='nameOrUsername' type="text" placeholder='Email or username' required />

                        <input id='password' type='password' placeholder='Password' required />
                        <span className='toggle-password' ></span>

                        <input id='logInButton' type="button" value="Log in" />

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Register