import React from 'react';

const AddJobs = () => {


    const handleAddJobPost = (e) => {
        e.preventdefault();
    }


    return (
        <div>
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
                            <input type="text" name='company' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Company" required />
                        </div>
                        {/* category */}
                        <div className="mb-2">
                            <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                Category
                            </label>
                            <input type="text" name='category' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Category" required />
                        </div>
                        {/* company_logo */}
                        <div className="mb-2">
                            <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                                Company Logo URL
                            </label>
                            <input type="url" name='logo' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Company Logo URL" required />
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