import React from 'react';
import { useLoaderData } from 'react-router';

const JobDetails = () => {
    
    const jobData = useLoaderData();
    console.log(jobData)

    return (
        <div>
            <h3>Hellomama</h3>
        </div>
    );
};

export default JobDetails;