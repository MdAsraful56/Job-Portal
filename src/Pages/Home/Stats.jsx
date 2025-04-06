import React, { useEffect, useState } from 'react';
import StatsCard from './StatsCard';

const Stats = () => {

    const [stats, setStats] = useState([]);

    useEffect( () => {
        fetch('https://job-protal-server-indol.vercel.app/stats')
            .then(res => res.json())
            .then(data => {
                setStats(data);
            })
    } ,[])


    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
                {
                    stats.map(stat => <StatsCard key={stat._id} stat={stat} />)
                }
            </div>
        </div>
    );
};

export default Stats;