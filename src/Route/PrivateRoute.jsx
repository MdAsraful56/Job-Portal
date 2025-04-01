import React, { useContext } from 'react';
import AuthContext from './../Contexts/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();


    if (loading) {
        return <div className="text-center my-20"><span className='loading loading-ring loading-xl'></span></div>
    }

    if (user) {
        return children
    } 

    return <Navigate to='/login' state={location?.pathname} />
};

export default PrivateRoute;