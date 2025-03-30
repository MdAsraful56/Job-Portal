import React from 'react';
import { useLoaderData } from 'react-router';
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

    const { title, jobType, applicationDeadline, company, location, salaryRange, category, } = jobData;

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
                    <div className="">
                        <button className="btn btn-primary hover:bg-transparent hover:text-black"><IoMdCheckmarkCircleOutline size={20} /> Apply Now</button>
                    </div>
                </div>
                <hr className="my-5 text-gray-500 space-y-5" />
                <div className="border-[1px] border-gray-400 p-5 rounded-2xl">
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
            </div>
        </div>
    );
};

export default JobDetails;