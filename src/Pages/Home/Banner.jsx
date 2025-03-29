import React from 'react';
import { motion } from "motion/react"
import team01 from '../../assets/Team/team-01.jpg'
import team02 from '../../assets/Team/team-02.jpg'

const Banner = () => {
    return (
        <div>
            <div className="flex lg:flex-row flex-col items-center justify-between mt-20 gap-10">
                <div className="lg:w-1/2 w-full space-y-4 ">
                    <motion.h1   animate={{ x: 100 }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} className="text-4xl font-semibold">
                        The <motion.span animate={{color: ['#ff5733', '#51ff0b', '#0b1dff']}} transition={{repeat: Infinity, duration: 2}} className="">Easiest Way</motion.span> <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; to Get Your New Job
                    </motion.h1>
                    <p className="">Each month, more than 3 million job seekers turn to website in their search for work, making over 140,000 applications every single day</p>
                </div>
                <div className="lg:w-1/2 w-full flex flex-col space-y-4">
                    <motion.img animate={{y: [0, 30, 0]}} transition={{duration: 5, repeat: Infinity}} src={team01} alt="" className="max-w-sm w-72 rounded-t-3xl rounded-br-3xl border-l-4 border-b-4 border-blue-500 shadow-2xl" />
                </div>
            </div>
        </div>
    );
};

export default Banner;