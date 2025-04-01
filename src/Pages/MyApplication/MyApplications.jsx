import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../Contexts/AuthContext/AuthContext';

const MyApplications = () => {

    const { user } = useContext(AuthContext);
    const [myJobs, setMyJobs] = useState([]);

    useEffect( () => {
        fetch(`http://localhost:3000/jobApplication?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyJobs(data))
    } ,[user.email])

    console.log(myJobs);


    return (
        <div>
            
        </div>
    );
};

export default MyApplications;