import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigate from '../../pages/Sheard/Navigate/Navigate';



const Loginlayout = () => {
    return (
        <div>
            <Navigate></Navigate>
            <Outlet></Outlet>
           
        </div>
    );
};

export default Loginlayout;