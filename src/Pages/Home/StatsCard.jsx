import React from 'react';
import CountUp from 'react-countup';

const StatsCard = ({stat}) => {

    const { value, label, description } = stat;

    return (
        <div className='text-center space-y-2'>
            <CountUp className='text-5xl text-blue-600' end={value}  duration={20.75} /> <span className="text-6xl text-blue-600">+</span>
            <h3 className="">{label}</h3>
            <p className="">{description}</p>
        </div>
    );
};

export default StatsCard;