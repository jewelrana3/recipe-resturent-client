import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigateBer from '../../pages/NavigateBer/NavigateBer';

const Loginlayout = () => {
    return (
        <div>
            <NavigateBer></NavigateBer>
            <Outlet></Outlet>
        </div>
    );
};

export default Loginlayout;