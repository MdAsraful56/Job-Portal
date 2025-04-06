import React, { useEffect, useState } from 'react';
import CompanyCard from './CompanyCard';

const Company = () => {


    
    const [companys, setCompanys] = useState([]);

    useEffect( () => {
        fetch('https://job-protal-server-indol.vercel.app/companys')
            .then(res => res.json())
            .then(data => setCompanys(data))
    } ,[])

    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
                {
                    companys.map(company => <CompanyCard key={company._id} company={company} /> )
                }
            </div>
        </div>
    );
};

export default Company;