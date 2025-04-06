import React, { useEffect, useState } from 'react';
import HotJobsCard from './HotJobsCard';

const HotJobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect( () => {
        fetch('https://job-protal-server-indol.vercel.app/jobs')
            .then(res => res.json())
            .then(data => {
                setJobs(data);
            })
    } ,[]);


    return (
        <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
                {
                    jobs.map(job => <HotJobsCard key={job._id} job={job} />)
                }
            </div>
        </div>
    );
};

export default HotJobs;