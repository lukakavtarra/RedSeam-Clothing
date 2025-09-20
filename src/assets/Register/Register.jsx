import React, {useState} from 'react'
import registerImage from '../../image/62bc5492a876268b6b9fc395f006a9259cafde47.png'

import { useForm } from 'react-hook-form'

import { MdCameraAlt } from "react-icons/md";

import { Link } from 'react-router-dom';


import './Register.css'



const Register = () => {
    const [avatarPreview, setAvatarPreview] = useState(null)
    // const changeAvatar = () => {
    //     setAvatarPreview(URL.createObjectURL(customerAvatar[0]))
    //     console.log(avatarPreview)
    // }

    const {
        watch,
        register,
    } = useForm({
        defaultValues: {
            email: "",
            username: "",
            password: "",
            password_confirmation: ""
        },
    });

    const UnregisterAvatar = () => {
        setAvatarPreview(null)
    }

    const RegisterAvatar = (e) => {
        const image = e.target.files[0]
        if(!image) return;

        setAvatarPreview(image)
    }


    const registerUser = async (e) => {
        e.preventDefault(); // prevent default form submit

        const formData = new FormData();

        if (avatarPreview) {
            formData.append("avatar", avatarPreview);
        }
        formData.append("email", watch("email"));
        formData.append("username", watch("username"));
        formData.append("password", watch("password"));
        formData.append("password_confirmation", watch("password_confirmation"));

        try {
            const response = await fetch(
                "https://api.redseam.redberryinternship.ge/api/register",
                {
                    method: "POST",
                    body: formData,
                }
            );

            const result = await response.json(); // or text() if needed
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <form onSubmit={registerUser}>
            <div id='registration'>
                <div className='flexBox' id='loginPage'>
                    <img id='loginImage' src={registerImage} alt="loginImage" />
                    <div>
                        <h2>Registration</h2>
                        <div id='' className="input-wrapper">
                            <div id='avatar_input'>
                                {avatarPreview ? (
                                    <div id='uploaded'>
                                        <label htmlFor='image-file'>
                                            <div className="circle">
                                                {avatarPreview ? (
                                                    <img id='avatar_image' src={URL.createObjectURL(avatarPreview)} alt="avatar" />
                                                ) : console.log(avatarPreview)}
                                            </div>
                                            <span>Upload new</span>
                                        </label>
                                        <span onClick={UnregisterAvatar} id='removeButton'>Remove</span>
                                    </div>
                                ) :
                                    <label htmlFor='image-file'>
                                        <div className='circle' >
                                            < MdCameraAlt id='avatar_icon' />
                                        </div> Upload Image</label>
                                }
                                <input className='no_display' type="file" id="image-file" accept="image/jpeg" onChange={RegisterAvatar}  />

                            </div>
                            {/* <label for="image-file">Upload Image</label> */}
                            <input id='name' type="text" placeholder='Username' required {...register("username")} />
                            <input id='username' type='email' placeholder='Email' required {...register("email")} />

                            <input id='password' type='password' placeholder='Password' required {...register("password")} />
                            <input id='password_confirmation' type='password' placeholder='Password' required {...register("password_confirmation")} />
                            <span className='toggle-password' ></span>

                            <input id='registerButton' type="submit" value="Register" />

                            <p className='membership'>Already a member? <Link to='/login'><span>Login</span></Link> </p>


                        </div>
                    </div>
                </div>

            </div>
        </form>
    )
}

export default Register