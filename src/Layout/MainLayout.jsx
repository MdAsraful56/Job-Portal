import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default MainLayout;