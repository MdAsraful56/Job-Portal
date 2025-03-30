import React from 'react';
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
// import arrorwLottie from '../../assets/lottie/arrow Animation.json'
// import { FaArrowRight } from 'react-icons/fa';
// import { motion } from "motion/react"


const Home = () => {



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



            <section className="">
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

            <section className="my-52">
                <div className="text-center ">
                    <h2 className="text-4xl">Top Recruiters & Companies</h2>
                    <p className="text-lg">We have over 1,000+ recruiters</p>
                </div>
                <div className="">
                    <Company />
                </div>
            </section>


            <section className="">
                <Stats />
            </section>

            <section className="">
                <div className="text-center mt-52 mb-52">
                    <h2 className="text-4xl">News and Blog</h2>
                    <p className="">Read our latest news and blogs</p>
                </div>
            </section>
        </div>
    );
};

export default Home;