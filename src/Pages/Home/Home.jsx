import React from 'react';
import CountUp from 'react-countup';
import Img01 from '../../assets/Img-01.png'

const Home = () => {




    return (
        <div>
            <h3 className="text-2xl"></h3>




            <section className=" my-52">
                <div className="flex lg:flex-row  flex-col sm:flex-col items-center">
                    <div className="lg:w-1/2 w-full lg:mb-0 mb-8">
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


            <section className="">
                <CountUp className='text-3xl' end={100}  duration={5.75} />
            </section>
        </div>
    );
};

export default Home;