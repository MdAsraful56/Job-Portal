import React, { useContext } from 'react';
import AuthContext from './../../Contexts/AuthContext/AuthContext';

const AddJobs = () => {

    const { user } = useContext(AuthContext);


    const handleAddJobPost = (e) => {
        // e.preventdefault();
        e.preventDefault(); 

        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        // console.log(initialData);

        const { min, max, currency, ...newJob } = initialData;

        newJob.salaryRange = { min, max, currency };
        newJob.requirements = newJob.requirements.split('\n');
        newJob.responsibilities = newJob.responsibilities.split('\n');

        // console.log(newJob);

        fetch('https://job-protal-server-indol.vercel.app/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                e.target.reset();
            })
    }


    return (
        <div className='my-5 mb-16'>
            <h2 className="text-2xl text-center my-3 mt-5">Post a New Job</h2>
            <div className="">
                    <form onSubmit={handleAddJobPost} >
                        {/* title  */}
                        <div className="mb-2">
                            <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                Title
                            </label>
                            <input type="text" name='title' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Job Title" required />
                        </div>
                        {/* locatin */}
                        <div className="mb-2">
                            <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                Location
                            </label>
                            <input type="text" name='location' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Location" required />
                        </div>
                        {/* company */}
                        <div className="mb-2">
                            <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                Company
                            </label>
                            <input type="text" name='company' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Company Name" required />
                        </div>
                        {/* applicationDeadline */}
                        <div className="mb-2">
                            <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                            Application Deadline
                            </label>
                            <input type="date" name='applicationDeadline' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  required />
                        </div>
                        {/* hr name  */}
                        <div className="mb-2">
                            <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                HR Name
                            </label>
                            <input type="text" name='hr_name' defaultValue={user?.displayName} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline read-only" placeholder="" required />
                        </div>
                        {/* hr email  */}
                        <div className="mb-2">
                            <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                HR Email
                            </label>
                            <input type="email" name='hr_email' defaultValue={user?.email} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline read-only" placeholder="" required />
                        </div>
                        {/* category */}
                        <div className="mb-2">
                            <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                Category
                            </label>
                            <select name='category' className="select shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                                <option disabled={true}>Pick a Job Category</option>
                                <option>Engineering</option>
                                <option>Marketing</option>
                                <option>Finance</option>
                                <option>Teaching</option>
                            </select>
                        </div>
                        {/* jobtype */}
                        <div className="mb-2">
                            <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                Job Type
                            </label>
                            <select name='jobType' className="select shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                                <option disabled={true}>Pick a Job type</option>
                                <option>Full-time</option>
                                <option>Intern</option>
                                <option>Part-time</option>
                            </select>
                        </div>
                        {/* salaryRange */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
                            <div className="mb-2">
                                <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                    Salary Range
                                </label>
                                <input type="text" name='min' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Min" required />
                            </div>
                            <div className="mb-2">
                                <input type="text" name='max' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Max" required />
                            </div>
                            <div className="mb-2">
                                <select name='currency' defaultValue="Pick a color" className="select shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                                    <option disabled={true}>Pick a Currency</option>
                                    <option>BDT</option>
                                    <option>USD</option>
                                    <option>INR</option>
                                </select>
                            </div>
                        </div>
                        {/* company_logo */}
                        <div className="mb-2">
                            <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                                Company Logo URL
                            </label>
                            <input type="url" name='company_logo' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Company Logo URL" required />
                        </div>
                        {/* responsibilities */}
                        <div className="mb-2">
                            <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                                Responsibilities
                            </label>
                            <textarea name='responsibilities' rows={5} className="shadow resize-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Write each responsibilities in a new line" required></textarea>
                        </div>
                        {/* Requirements */}
                        <div className="mb-2">
                            <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                                Requirements
                            </label>
                            <textarea name='requirements' rows={5} className="shadow resize-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Put each requirements in a new line" required></textarea>
                        </div>
                        {/* description */}
                        <div className="mb-2">
                            <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                                Description
                            </label>
                            <textarea name='description' rows={12} className="shadow resize-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Description" required></textarea>
                        </div>
                        
                        <button type='submit' className='bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add New Job</button>
                    </form>
            </div>
        </div>
    );
};

export default AddJobs;