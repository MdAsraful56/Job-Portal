import React from 'react';
import HotJobs from '../Home/HotJobs';
import { Link } from 'react-router';

const AllJobs = () => {
    return (
        <div className='my-20'>
            <HotJobs />
            <div className="text-center mt-20">
                <h3 className="text-3xl">Add New Jobs</h3>
                <Link to='/addJob' className="btn btn-primary mt-5">Add A Job</Link>
            </div>
        </div>
    );
};

export default AllJobs;