import React from 'react';
import CountUp from 'react-countup';
import Img01 from '../../assets/Img-01.png'
import hiring01 from '../../assets/lottie/hiring2 Animation.json'
import hiring02 from '../../assets/lottie/hiring Animation.json'
import Lottie from 'lottie-react';
import Banner from './Banner';

const Home = () => {




    return (
        <div>
            <Banner />

            <section className="">
                <div className="flex lg:flex-row flex-col items-center justify-between mt-52">
                    <Lottie animationData={hiring01} loop={true} className="lg:w-1/6 w-full lg:h-auto h-52  mx-auto" />
                    <div className="flex flex-row gap-5">
                        <h1 className="flex flex-col">We are <span className="text-4xl ml-5">Hiring</span></h1>
                        <p className="">Let’s Work Together & Explore Opportunities</p>
                        <button className="btn btn-accent mt-10">Apply Now</button>
                    </div>
                    <Lottie animationData={hiring02} loop={true} className="lg:w-1/6 w-full lg:h-auto h-52 mx-auto" />
                </div>
            </section>


            <section className="mt-52">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">Find Your Dream Job</h1>
                    <p className="text-sm">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 600,000 companies worldwide.</p>
                </div>
            </section>

            <section className=" my-52">
                <div className="flex lg:flex-row  flex-col sm:flex-col items-center">
                    <div className="lg:w-1/2 w-full lg:mb-0 mb-8 rounded-2xl shadow-lg">
                        <img src={Img01} alt="" className="w-full h-80 object-contain" />
                    </div>
                    <div className="lg:w-1/2 w-full flex flex-col space-y-4">
                        <h3 className="text-2xl font-semibold">Millions Of Jobs.</h3>
                        <h1 className="text-5xl font-bold">Find The One That’s <span className="text-blue-400">Right</span> For You</h1>
                        <p className="">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 600,000 companies worldwide. The right job is out there</p>
                        <div className="flex items-center space-x-4">
                            <button className="btn btn-primary">Apply Now</button>
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

                </div>
                <div className="">

                </div>
            </section>


            <section className="">
                <CountUp className='text-3xl' end={100}  duration={5.75} />
            </section>
        </div>
    );
};

export default Home;