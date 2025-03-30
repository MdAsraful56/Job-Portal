import React from 'react';
import Rating from '@mui/material/Rating';
import { IoLocationOutline } from 'react-icons/io5';

const CompanyCard = ({company}) => {

    const { companyName, jobs, location, img, rating } = company;

    return (
        <div className='border rounded-xl shadow-lg p-2 hover:shadow-xl duration-300 hover:scale-105 '>
            <div className="flex flex-row gap-5">
                <img src={img} alt="" className="" />
                <div className="flex flex-col">
                    <h2 className="text-base">{companyName}</h2>
                    <Rating className='' size='small' name="read-only" value={rating} readOnly />
                </div>
            </div>
            <div className="flex flex-row justify-around items-center mt-2">
                <div className="flex flex-row gap-1 items-center">
                    <IoLocationOutline />
                    <h4 className="text-sm">{location}</h4>
                </div>
                <h4 className="text-sm">{jobs} Open jobs</h4>
            </div>
        </div>
    );
};

export default CompanyCard;