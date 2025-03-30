import React from 'react';
import { Link, useLoaderData } from 'react-router';
import mainImg from '../../assets/details.png'
import { PiShoppingBagBold } from 'react-icons/pi';
import { IoMdCheckmarkCircleOutline, IoMdTime } from 'react-icons/io';
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { LuMapPinned } from "react-icons/lu";
import { IoTimeOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";
import { BiSolidCategoryAlt } from "react-icons/bi";

const JobDetails = () => {
    
    const jobData = useLoaderData();
    // console.log(jobData)

    const { _id, title, jobType, applicationDeadline, company, location, salaryRange, category, responsibilities } = jobData;

    return (
        <div className='mb-40'>
            <div className="">
                <img src={mainImg} alt="" className="rounded-2xl my-5" />
                <div className="flex flex-row justify-between">
                    <div className="">
                        <h2 className="text-3xl">{title}</h2>
                        <div className="flex flex-row gap-5 items-center text-gray-600">
                            <div className="flex items-center gap-0.5">
                                <PiShoppingBagBold size={16} /> <span>{jobType}</span>
                            </div>
                            <div className="flex items-center gap-0.5">
                                <IoMdTime size={16} /> <span>{applicationDeadline}</span>
                            </div>
                        </div>
                    </div>
                    <Link to={`/jobApply/${_id}`} className="">
                        <button className="btn btn-primary hover:bg-transparent hover:text-black"><IoMdCheckmarkCircleOutline size={20} /> Apply Now</button>
                    </Link>
                </div>
                <hr className="my-5 text-gray-500 space-y-5" />
                <div className="border-[1px] border-gray-400 p-5 rounded-base">
                    <h2 className="text-xl">Employment Information</h2>
                    <hr className="text-gray-400 my-3" />
                    <div className="grid grid-cols-2 space-y-3 ">
                        <div className="flex flex-row gap-2 items-center text-gray-700"><HiOutlineBuildingOffice2 /> Company :  <span className="text-black">{company}</span> </div>
                        <div className="flex flex-row gap-2 items-center text-gray-700"><BiSolidCategoryAlt /> Category :  <span className="text-black">{category}</span> </div>
                        <div className="flex flex-row gap-2 items-center text-gray-700"><AiOutlineDollar /> Salary :  <span className="text-black">{salaryRange.min} - {salaryRange.max}</span> </div>
                        <div className="flex flex-row gap-2 items-center text-gray-700"><PiShoppingBagBold /> Job type :  <span className="text-black">{jobType}</span> </div>
                        <div className="flex flex-row gap-2 items-center text-gray-700"><IoTimeOutline /> Deadline :  <span className="text-black">{applicationDeadline}</span> </div>
                        <div className="flex flex-row gap-2 items-center text-gray-700"><LuMapPinned /> Location :  <span className="text-black">{location}</span> </div>
                    </div>
                </div>
                <h2 className="text-2xl mt-5">Welcome to Job Portal Team</h2>
                <p className="mt-3">The Job Portal Design team has a vision to establish a trusted platform that enables productive and healthy enterprises in a world of digital and remote everything, constantly changing work patterns and norms, and the need for organizational resiliency. </p>
                <p className='mt-5'> The ideal candidate will have strong creative skills and a portfolio of work which demonstrates their passion for illustrative design and typography. This candidate will have experiences in working with numerous different design platforms such as digital and print forms.</p>
                <div className="">
                    <h2 className="text-2xl mt-5">Responsibilities</h2>
                    {
                        responsibilities.map((res, index) => <li key={index}>{res}</li> )
                    }
                </div>
                <h2 className="text-2xl mt-5">Preferred Experience</h2>
                <ul>
                    <li>Designing user experiences for enterprise software / services</li>
                    <li>Creating and applying established design principles and interaction patterns</li>
                    <li>Aligning or influencing design thinking with teams working in other geographies</li>
                </ul>
                <Link to={`/jobApply/${_id}`} className="mt-6">
                    <button className="btn btn-primary hover:bg-transparent hover:text-black"><IoMdCheckmarkCircleOutline size={20} /> Apply Now</button>
                </Link>
            </div>
        </div>
    );
};

export default JobDetails;