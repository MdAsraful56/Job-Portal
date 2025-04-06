// /* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import Img01 from '../../assets/Img-01.png'
// import Img02 from '../../assets/Img-02.png'
// import Img03 from '../../assets/Img-03.png'
import hiring01 from '../../assets/lottie/hiring2 Animation.json'
import hiring02 from '../../assets/lottie/hiring Animation.json'
import Lottie from 'lottie-react';
import Banner from './Banner';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import HotJobs from './HotJobs';
import Stats from './Stats';
import Company from './Company';
// import Blog from '../Blog/Blog';
// import arrorwLottie from '../../assets/lottie/arrow Animation.json'
// import { FaArrowRight } from 'react-icons/fa';
// import { motion } from "motion/react"


const Home = () => {

    const [blogData, setBlogData] = useState([]);
    
    useEffect( () => {
        fetch('https://job-protal-server-indol.vercel.app/blogs')
            .then(res => res.json())
            .then(data => setBlogData(data))
    } ,[])

    // console.log(blogData)


    return (
        <div>
            <Banner />

            {/* <section className="mt-52">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">Browse by category</h1>
                    <p className="text-sm">Find the job that’s perfect for you. about 800+ new jobs everyday.</p>
                </div>
                <div className="">
                    <div className="">
                        <img src="" alt="" className="" />
                        <div className="">
                            <h4 className=""></h4>
                            <p className=""></p>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="-mt-28">
                <div className="flex lg:flex-row flex-col items-center justify-between mt-52">
                    <Lottie animationData={hiring01} loop={true} className="lg:w-1/6 w-full lg:h-auto h-40  mx-auto" />
                    <div className="flex flex-row gap-5">
                        <h1 className="flex flex-col text-lg">We are <span className="text-4xl ml-5 text-orange-400 font-semibold">Hiring</span></h1>
                        <p className="">Let’s Work Together & Explore Opportunities</p>
                        <button className="btn btn-accent mt-10"><IoMdCheckmarkCircleOutline size={20} /> Apply Now</button>
                    </div>
                    <Lottie animationData={hiring02} loop={true} className="lg:w-1/6 w-full lg:h-auto h-40 mx-auto" />
                </div>
            </section>

            <section className="mt-10">
                <div className="text-center">
                    <h1 className="text-5xl font-semibold">Find Your Dream Job</h1>
                    <p className="text-sm">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 600,000 companies worldwide.</p>
                </div>
                <HotJobs />
            </section>

            <section className="mt-20">
                <div className="flex lg:flex-row  flex-col sm:flex-col items-center gap-10">
                    <div className="lg:w-1/2 w-full lg:mb-0 mb-8 rounded-2xl shadow-lg  overflow-hidden">
                        {/* <img src={Img02} alt="" className="w-full h-40 object-cover rounded-2xl" /> */}
                        <img src={Img01} alt="" className="w-full h-80 object-cover rounded-2xl " />
                    </div>
                    <div className="lg:w-1/2 w-full flex flex-col space-y-4">
                        <h3 className="text-2xl font-semibold text-gray-600">Millions Of Jobs.</h3>
                        <h1 className="text-5xl font-bold">Find The One That’s <span className="text-blue-400">Right</span> For You</h1>
                        <p className="">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 600,000 companies worldwide. The right job is out there</p>
                        <div className="flex items-center space-x-4">
                            <button className="btn btn-primary"><IoMdCheckmarkCircleOutline size={20} /> Apply Now</button>
                            <a className="underline">Learn More</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-20">
                <div className="text-center ">
                    <h2 className="text-4xl">Top Recruiters & Companies</h2>
                    <p className="text-lg">We have over 1,000+ recruiters</p>
                </div>
                <div className="">
                    <Company />
                </div>
            </section>

            <section className="mt-10">
                <Stats />
            </section>

            <section className="my-16 ">
                <div className="text-center mb-10">
                    <h2 className="text-4xl">News and Blog</h2>
                    <p className="">Read our latest news and blogs</p>
                </div>
                <div className="">
                    {/* <Blog /> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                        {
                            blogData.map( (blog) => {
                                return (
                                    <div key={blog._id} className="card w-96 bg-base-100 shadow-xl mx-auto my-5 hover:shadow-lg hovrer:border-8 border-blue-500 hover:scale-105 hover:duration-300 ">
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
                </div>
            </section>
        </div>
    );
};

export default Home;