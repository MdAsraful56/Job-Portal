import React, { useContext } from 'react';
import { Link } from 'react-router';
import AuthContext from '../Contexts/AuthContext/AuthContext';
import userLogo from '../assets/user.png';
import Lottie from 'lottie-react';
import logoLottieData from '../assets/lottie/logo Animation.json';


const Navbar = () => {


    const { user, logout } = useContext(AuthContext);

    const navLink = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/jobApplication'>My Applications</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
            </>


    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navLink}
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">
                        <div className="w-6">
                            <Lottie animationData={logoLottieData} />
                        </div>
                        Job Portal</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?  
                            <>
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                        <img
                                            alt="Tailwind CSS Navbar component"
                                            src={user?.photoURL || userLogo} />
                                        </div>
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                        <li><a className="justify-between">
                                            {user?.displayName}
                                        </a></li>
                                        <button onClick={logout} className=''>Logout</button>
                                    </ul>
                                </div>
                            </> 
                            : 
                            <>
                                <Link to='/register' className="btn">Register</Link>
                                <Link to='/login' className="btn">Login</Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;