import React from 'react';
import AddBlog from './AddBlog';
import { Link, useLoaderData } from 'react-router';

const Blog = () => {

    const blogData = useLoaderData();
    // console.log(data);

    


    return (
        <div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mb-10">
            {
                blogData.map( (blog) => { 
                    return (
                        <div key={blog._id} className="card w-96 bg-base-100 shadow-xl mx-auto my-5">
                            <figure><img src={blog.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{blog.title}</h2>
                                <p>{blog.description}</p>
                                <div className="card-actions justify-between items-center">
                                    <div className="flex flex-row items-center gap-2">
                                        <div className="avatar">
                                            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src={blog.authorImage} alt="Author" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col ">
                                            <p className='ms-2'>{blog.author}</p>
                                            <p className='ms-2'>Post: {blog.date}</p>
                                        </div>

                                    </div>
                                    <h3 className="">{blog.reading_time}</h3>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>


            {/* <AddBlog /> */}
            <div className="text-center mt-10 mb-10">
                <h2 className="text-3xl">Add New Blogs</h2>
                <Link to='/addBlog' className="btn btn-primary">Add Blog</Link>
            </div>
        </div>
    );
};

export default Blog;