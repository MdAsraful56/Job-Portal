import React, { useContext } from 'react';
import blogLottieData from '../../assets/lottie/blog Animation.json'
import Lottie from 'lottie-react';
import AuthContext from '../../Contexts/AuthContext/AuthContext';


const AddBlog = () => {

    const { user } = useContext(AuthContext);


    const handleAddBlog = (e) => {
        e.preventDefault();

        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const image = form.image.value;
        const date = form.date.value;
        // console.log(title, image, description)

        // user details 
        const author = user?.displayName;
        // const email = user?.email;
        const author_image = user?.photoURL;


        const blog = { title, description, image, date, author_image, author };

        fetch('https://job-protal-server-indol.vercel.app/blogs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(blog)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    return (
        <div className='mb-20'>
            <h2 className="text-center text-3xl my-10">Write a Blog</h2>
            <div className="flex lg:flex-row flex-col gap-3">
                <div className="lg:w-2/4 w-full">
                    <Lottie animationData={blogLottieData} />
                </div>
                <div className='lg:w-2/4 w-full'>
                    <form onSubmit={handleAddBlog} >
                            <div className="mb-4">
                                <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                    Title
                                </label>
                                <input type="text" name='title' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Title" required />
                            </div>
                            <div className="mb-4">
                                <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                                    Image URL
                                </label>
                                <input type="url" name='image' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Image URL" required />
                            </div>
                            <div className="mb-4">
                                <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                    Date
                                </label>
                                <input type="date" name='date' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Title" required />
                            </div>
                            <div className="mb-4">
                                <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                                    Description
                                </label>
                                <textarea name='description' rows={12} className="shadow resize-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Description" required></textarea>
                            </div>
                            <button type='submit' className='bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add Blog</button>
                    </form>
                </div>

            </div>

        </div>
    );
};

export default AddBlog;