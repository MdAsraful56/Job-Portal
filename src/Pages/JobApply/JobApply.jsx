import React, { useContext } from 'react';
import AuthContext from '../../Contexts/AuthContext/AuthContext';
import jobApplyLottieData from '../../assets/lottie/jobApply Animation.json';
import Lottie from 'lottie-react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { useParams, useNavigate } from 'react-router';
// import axios from 'axios';

const JobApply = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    const { user } = useContext(AuthContext);
    const {displayName, email} = user;
    // console.log(displayName, email);

    const handleJobApply = (e) => {
        e.preventDefault();
        
        const form = e.target;
        const userName = form.name.value;
        const userEmail = form.email.value;
        const userGithub = form.github.value;
        const userLinkedin = form.linkedin.value;

        console.log(userName, userEmail, userGithub, userLinkedin);

        const jobApplication = {
            job_id: id,
            userName: userName,
            userEmail: userEmail,
            userGithub: userGithub,
            userLinkedin: userLinkedin
        }

        fetch('https://job-protal-server-indol.vercel.app/jobApplications', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                navigate('/jobApplication');
            })

    }

    return (
        <div className='mb-20'>
            <h2 className="text-center text-3xl my-10">Apply Your Dream Job</h2>
            <div className="flex lg:flex-row flex-col gap-3">
                <div className="lg:w-2/4 w-full">
                    <Lottie animationData={jobApplyLottieData} />
                </div>
                <div className='lg:w-2/4 w-full'>
                    <form onSubmit={handleJobApply} >
                            <div className="mb-4">
                                <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                    Your Name
                                </label>
                                <input type="text" name='name' defaultValue={displayName} readOnly className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Title" required />
                            </div>
                            <div className="mb-4">
                                <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                    Your Email
                                </label>
                                <input type="email" name='email' defaultValue={email} readOnly className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Title" required />
                            </div>
                            <div className="mb-4">
                                <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                                    GitHub URL
                                </label>
                                <input type="url" name='github' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="GitHub URL" required />
                            </div>
                            <div className="mb-4">
                                <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                                    LinkedIn URL
                                </label>
                                <input type="url" name='linkedin' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="LinkedIn URL" required />
                            </div>
                            <button type='submit' className='bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center gap-1'><IoMdCheckmarkCircleOutline size={20} /> Apply Now</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JobApply;