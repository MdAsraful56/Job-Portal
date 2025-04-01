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
            
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        {/* <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                        </th> */}
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Details</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            myJobs.map(job => <tr key={job._id}>
                                <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                                </th>
                                <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                    <div className="mask mask-squircle h-12 w-12">
                                        <img
                                        src={job.company_logo}
                                        alt="Avatar Tailwind CSS Component" />
                                    </div>
                                    </div>
                                    <div>
                                    <div className="font-bold">{job.company}</div>
                                    <div className="text-sm opacity-50">{job.location}</div>
                                    </div>
                                </div>
                                </td>
                                <td>
                                {job.title}
                                <br />
                                <span className="badge badge-ghost badge-sm">{job.jobType}</span>
                                </td>
                                <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr> )
                        }
                    </tbody>
                </table>
                </div>
        </div>
    );
};

export default MyApplications;