import React, { children, useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = () => {
    const {user} = useContext(AuthContext)
    const location = useLocation()
    if(user){
        return children;
    }
    return <Navigate state={{from:location}} to='/login' replace></Navigate>
};

export default PrivateRouter;