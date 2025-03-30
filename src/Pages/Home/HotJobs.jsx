import React, { useEffect, useState } from 'react';
import HotJobsCard from './HotJobsCard';

const HotJobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect( () => {
        fetch('http://localhost:3000/jobs')
            .then(res => res.json())
            .then(data => {
                setJobs(data);
            })
    } ,[]);


    return (
        <di className="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-40">
                {
                    jobs.map(job => <HotJobsCard key={job._id} job={job} />)
                }
            </div>
        </di>
    );
};

export default HotJobs;