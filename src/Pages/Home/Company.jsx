import React, { useEffect, useState } from 'react';
import CompanyCard from './CompanyCard';

const Company = () => {


    
    const [companys, setCompanys] = useState([]);

    useEffect( () => {
        fetch('http://localhost:3000/companys')
            .then(res => res.json())
            .then(data => setCompanys(data))
    } ,[])

    return (
        <div>
            <div className="">
                {
                    companys.map(company => <CompanyCard key={company._id} company={company} /> )
                }
            </div>
        </div>
    );
};

export default Company;