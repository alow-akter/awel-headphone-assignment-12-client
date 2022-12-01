import React, { useContext, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

import Navbar from '../Shared/Navber/Navbar';



const DeshBoradLayout = () => {
    const { user } = useContext(AuthContext)
    const [allUsers, setAllUser] = useState([])
    fetch(`http://localhost:5001/allUsers/${user?.email}`)
        .then(res => res.json())
        .then(data => setAllUser(data))

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

                        {
                            allUsers?.role === 'Buyer' &&
                            <li className="bg-slate-200 text-sm font-bold uppercase">
                                <Link to='/deshBorad/myOrders'>My Orders</Link>
                            </li>
                        }

                        {allUsers?.role === "Seller" &&
                            <>
                                <li className="bg-slate-200 text-sm font-bold uppercase">
                                    <Link to='/deshBorad/myProduct'>My Product</Link>
                                </li>
                                <li className="bg-slate-200 text-sm font-bold uppercase">
                                    <Link to='/deshBorad/addProduct'>Add Product</Link>
                                </li>
                            </>
                        }

                        {allUsers?.role === "admin" &&
                            <>
                                <li className="bg-slate-200 text-sm font-bold uppercase">
                                    <Link to='/deshBorad/allSeller'>All Seller</Link>
                                </li>
                                <li className="bg-slate-200 text-sm font-bold uppercase">
                                    <Link to='/deshBorad/allBuyer'>All Buyer</Link>
                                </li>
                                <li className="bg-slate-200 text-sm font-bold uppercase">
                                    <Link to='/deshBorad/reportedItem'>Reported Item</Link>
                                </li>
                            </>
                        }



                    </ul>
                </div>
            </div >
        </div >

    );
};

export default DeshBoradLayout;