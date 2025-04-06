import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../Contexts/AuthContext/AuthContext';
// import axios from 'axios';
import { MdDeleteOutline } from "react-icons/md";


const MyApplications = () => {

    const { user } = useContext(AuthContext);
    const [myJobs, setMyJobs] = useState([]);

    useEffect( () => {
        fetch(`https://job-protal-server-indol.vercel.app/jobApplication?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyJobs(data))
    } ,[user.email])

    // console.log(myJobs);


    const deleteItem = async (id) => {
        try {
            // await axios.delete(`https://job-protal-server-indol.vercel.app/jobApplications/${id}`);
            const response = await fetch(`https://job-protal-server-indol.vercel.app/jobApplications/${id}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                throw new Error(`Failed to delete item: ${response.statusText}`);
            }

            setMyJobs(myJobs.filter(myJobs => myJobs._id !== id)); // Remove item from UI
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };




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
                        <th>Delete</th>
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
                                <button onClick={() => {deleteItem(job._id)}} className="btn btn-ghost btn-xs"> <MdDeleteOutline size={25} color='red' /> </button>
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