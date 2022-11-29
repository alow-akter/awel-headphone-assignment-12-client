import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navber/Navbar';



const DeshBoradLayout = () => {
    const [allUser, setAllUser] = useState()
    // useEffect(() => {
    //     fetch('http://localhost:5001/allUsers', {
    //         headers: {
    //             authorization: `bearer ${localStorage.getItem('accessToken')}`
    //         }
    //             .then(res => res.json())
    //             .then(data => setAllUser(data))
    //     })
    // }, [])
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile ">
                <input
                    id="dashboard-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                    {/* <!-- Page content here --> */}
                </div>
                <div className="drawer-side ">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  text-base-content">
                        {/*  <!-- Sidebar content here --> */}
                        <li className="bg-slate-200 text-sm font-bold uppercase">
                            <Link to='/deshBorad/myOrders'>My Orders</Link>
                        </li>

                        <li className="bg-slate-200 text-sm font-bold uppercase">
                            <Link to='/deshBorad/myProduct'>My Product</Link>
                        </li>
                        <li className="bg-slate-200 text-sm font-bold uppercase">
                            <Link to='/deshBorad/addProduct'>Add Product</Link>
                        </li>



                    </ul>
                </div>
            </div >
        </div >

    );
};

export default DeshBoradLayout;