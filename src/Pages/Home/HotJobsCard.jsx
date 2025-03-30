import React from 'react';
import { FaDollarSign } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';
import { PiShoppingBagBold, PiShoppingBagOpenFill } from 'react-icons/pi';

const HotJobsCard = ({job}) => {

    const { title, company, company_logo, jobType, applicationDeadline, requirements, description, location, salaryRange } = job;

    return (
        <div className=''>
            <div className="hover:shadow-lg hovrer:border-8 border-blue-500">
                <div className="card bg-base-100 shadow-sm">
                    <div className="flex flex-row gap-3 items-center p-2">
                        <figure>
                            <img src={company_logo} className='w-16 h-16' alt="company logo Img" />
                        </figure>
                        <div className="">
                            <h2 className="card-title">{company}</h2>
                            <div className="flex items-center gap-0.5">
                                <IoLocationOutline />
                                <div className="">{location}</div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <div className="flex flex-row gap-5 items-center">
                            <div className="flex items-center gap-0.5">
                                <PiShoppingBagBold /> <span>{jobType}</span>
                            </div>
                            <div className="flex items-center gap-0.5">
                                <IoMdTime /> <span>{applicationDeadline}</span>
                            </div>
                        </div>
                        <p className='flex-grow'>{description}</p>
                        <div className="gap-2 flex flex-wrap">
                            {
                                requirements.map((req, index) => <li key={index} className="btn hover:text-blue-500">{req}</li>)
                            }
                        </div>
                        <div className="card-actions justify-between items-center mt-5">
                            <div className="flex flex-row gap-5 items-center">
                                <p className="flex items-center ">Salary :  <FaDollarSign /> {salaryRange.min} - {salaryRange.max} </p>
                            </div>
                            <button className="btn btn-primary hover:bg-transparent hover:text-black ">Apply Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotJobsCard;