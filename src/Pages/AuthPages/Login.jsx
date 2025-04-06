import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import loginLOttieData from '../../assets/lottie/login Animation.json'
import AuthContext from './../../Contexts/AuthContext/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router';
// import axios from 'axios';

const Login = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false)
    const { loginUser } = useContext(AuthContext);

    const from = location?.state || '/';
    // const googlenavigate = async () => {
    //     try {
    //         await googleSignIn(); // Wait for sign-in to complete
    //         navigate(from); // Navigate after sign-in
    //     } catch (error) {
    //         console.error("Google sign-in failed:", error);
    //     }
    // };

    const handleLogin = (e) => {
        e.preventDefault()
        console.log('Login form submitted');

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);


        loginUser(email, password)
            .then((result) => {
                console.log("Full login result:", result); // 👈 Check this in console
                if (result && result.user) {
                console.log(result.user.email);
                form.reset();
                navigate(from);

                const user = { email: email };
                fetch('http://localhost:3000/jwt', {
                    method: 'POST',
                    headers: {
                    'content-type': 'application/json',
                    },
                    body: JSON.stringify(user),
                })
                    .then(res => res.json())
                    .then(data => {
                    console.log(data);
                    });
                } else {
                console.error("Login result missing user object.");
                }
            })
            .catch((error) => {
                console.log(error.message);
            });

    }


    return (
        <div className='flex flex-col-reverse md:flex-row gap-4 items-center justify-center'>
            <div className="w-full md:w-2/5 flex flex-col gap-4 items-center justify-center">
                {/* <h1 className="text-4xl font-semibold">Welcome to Job Portal</h1> */}
                <h2 className="text-2xl font-semibold">Login a Account</h2>
                {/* <button onClick={ () => { googlenavigate(); } } className="btn"> <FcGoogle size={20}/> <span className="">Sing up with Google</span> </button> */}
                <form onSubmit={handleLogin} className="md:w-3/5 w-full flex flex-col gap-4 items-center justify-center iansui-font">
                    {/* <h2 className="text-2xl font-semibold">Create a Account</h2> */}
                    {/* <div className="flex items-center justify-center">
                        <span className="text-sm">Or Continue With</span>
                    </div> */}
                    <label className="input validator">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                        <input type="email" name='email' placeholder="mail@site.com" required/>
                    </label>
                    <label className="input validator">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle></g></svg>
                        <input type={showPassword ? 'text' : 'password'} name='password' required placeholder="Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />
                        <button onClick={() => {setShowPassword(!showPassword)}} className="btn btn-xs absolute right-1 top-2" type="button">
                            {
                                showPassword ?  <FaEye /> : <FaEyeSlash />
                            }
                        </button>
                    </label>
                    <input type="submit" value="Submit & Login" className='btn btn-accent font-semibold text-sm rounded-lg hover:bg-transparent hover:border-2 hover:border-[#a5357c]'/>
                </form>
                <h4 className="text-base">Don't have an account? <Link to='/register' >Register</Link></h4>
            </div>
            <div className="">
                <Lottie animationData={loginLOttieData} />
            </div>
        </div>
    );
};

export default Login;