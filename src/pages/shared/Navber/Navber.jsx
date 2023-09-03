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
    <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>

    </>
    return (
        <div className="navbar fixed bg-slate-600 text-white z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu  menu-sm dropdown-content mt-3 p-2 shadow bg-emerald-900 flex-none">
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
                         <img title="Pizza Food" style={{width:"40px"}} className="rounded-lg mr-4" src='https://i.ibb.co/Bz4Ts9T/gettyimages-1301151665-612x612.jpg' alt="" />
                        <button className='btn text-white bg-red-950' onClick={handleLogout}>LogOut</button>
                    </>
                    :
                  <> <Link to='/login'><button className="btn btn-info">Login</button></Link> </>
                }
            </div>
        </div>
    //     <div className="drawer z-10">
    //     <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
    //     <div className="drawer-content flex flex-col">
    //         {/* Navbar */}
    //         <div className="w-full navbar py-5  bg-slate-600 ">
    //             <div className="flex-none lg:hidden">
    //                 <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost text-white">
    //                     <svg
    //                         xmlns="http://www.w3.org/2000/svg"
    //                         fill="none"
    //                         viewBox="0 0 24 24"
    //                         className="inline-block w-6 h-6 stroke-current"
    //                     >
    //                         <path
    //                             strokeLinecap="round"
    //                             strokeLinejoin="round"
    //                             strokeWidth="2"
    //                             d="M4 6h16M4 12h16M4 18h16"
    //                         ></path>
    //                     </svg>
    //                 </label>
    //             </div>
    //             <div className="flex-1 px-2 mx-2 text-lg md:text-xl lg:text-2xl font-semibold">
    //                 <a href="" className="flex items-center">
    //                     <span>
    //                         <img style={{ borderRadius: '50px' }} className="w-12" src="https://i.ibb.co/chxbvxW/Untitled2.png" alt="photo" />
    //                     </span>
    //                     <span className="text-orange-600 mr-2 ml-2"> Sports </span>
    //                     <span className="text-blue-600"> Masic</span>
    //                 </a>
    //             </div>
    //             <div className="flex-none hidden lg:block">
    //                 <ul className="menu items-center menu-horizontal">
    //                     {/* Navbar menu content here */}
    //                     {navItem}
    //                 </ul>
    //             </div>
    //         </div>
    //         {/* Page content here */}
    //     </div>
    //     <div className="drawer-side z-50">
    //         <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
    //         <ul className="menu p-4 rounded h-80% bg-slate-400 mt-24">
    //             {/* Sidebar content here */}
    //             {navItem}
    //         </ul>
    //     </div>
    // </div>
    );
};

export default Navber;