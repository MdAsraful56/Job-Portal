import React from 'react';
import { IoMdTime } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';
import { PiShoppingBagBold, PiShoppingBagOpenFill } from 'react-icons/pi';

const HotJobsCard = ({job}) => {

    const { title, company, company_logo, jobType, applicationDeadline, requirement, description, location, salaryRange } = job;

    return (
        <div className=''>
            <div className="">
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
                        <div className="">
                            <div className="">
                                <PiShoppingBagBold /> <span>{jobType}</span>
                            </div>
                            <div className="">
                                <IoMdTime /> <span>{applicationDeadline}</span>
                            </div>
                        </div>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotJobsCard;