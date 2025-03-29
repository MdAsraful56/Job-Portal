import React from 'react';
import { motion } from "motion/react"
import team01 from '../../assets/Team/team-01.jpg'
import team02 from '../../assets/Team/team-02.jpg'
import { MdOutlineExplore } from 'react-icons/md';

const Banner = () => {
    return (
        <div>
            <div className="flex lg:flex-row flex-col items-center justify-between mt-8 gap-10">
                <div className="lg:w-1/2 w-full space-y-4 ">
                    <motion.h1   animate={{ x: 50 }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} className="text-4xl font-semibold">
                        The <motion.span animate={{color: ['#ff5733', '#51ff0b', '#0b1dff']}} transition={{repeat: Infinity, duration: 2}} className="">Easiest Way</motion.span> <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; to Get Your New Job
                    </motion.h1>
                    <p className="">Each month, more than 3 million job seekers turn to website in their search for work, making over 140,000 applications every single day</p>
                    <button className="btn btn-primary text-lg items-center flex"><MdOutlineExplore size={20} /> Explor</button>
                </div>
                <div className="lg:w-1/2 w-full flex flex-col space-y-4">
                    <motion.img animate={{y: [10, 40, 10]}} transition={{duration: 5, repeat: Infinity}} src={team01} alt="" className="max-w-sm w-72 rounded-t-3xl rounded-br-3xl border-l-4 border-b-4 border-blue-500 shadow-2xl" />
                    <motion.img animate={{x: [100, 150, 100]}} transition={{duration: 5, repeat: Infinity}} src={team02} alt="" className="max-w-sm w-72 rounded-t-3xl rounded-br-3xl border-l-4 border-b-4 border-blue-500 shadow-2xl" />
                </div>
            </div>
            {/* motion */}
        </div>
    );
};

export default Banner;