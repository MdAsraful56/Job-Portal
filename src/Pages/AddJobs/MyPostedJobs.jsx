import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../Contexts/AuthContext/AuthContext';

const MyPostedJobs = () => {

    const [jobs, setJobs] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect( () => {
        fetch(`http://localhost:3000/jobs?email=${user?.email}`)
        .then(res => res.json())
        .then( data => {
            console.log(data)
            setJobs(data)
        })
    } ,[user?.email])


    return (
        <div>
            <h3 className="text-3xl">Post Jobs</h3>
            
        </div>
    );
};

export default MyPostedJobs;