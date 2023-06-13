import { useContext } from 'react';
import {  Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../../provider/AuthProvider';

const Navber = () => {
    const {user,logOut} = useContext(AuthContext)

    const handleLogout=()=>{
        logOut()
        .then(()=>{})
        .then(error => console.log(error))
    }

    const navItem = 
    <div className='navItem flex'>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
    </div>
    return (
        <div className="navbar fixed  bg-slate-700 text-white z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">
                    <img style={{width:'50px'}} src="https://i.ibb.co/jrsk83C/mixing-f2031564.png" alt="" />
                    Cuisine <span className='text-red-500'>Qi</span>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
            {user ?
                    <>
                         <img title="" style={{width:"40px"}} className="rounded-lg mr-4" src={user?.email} alt="" />
                        <button className='btn text-white bg-red-950' onClick={handleLogout}>LogOut</button>
                    </>
                    :
                  <> <Link to='/login'><button className="btn btn-info">Login</button></Link> </>
                }
            </div>
        </div>
    );
};

export default Navber;