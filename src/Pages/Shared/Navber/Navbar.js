import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }

    const menuItems = <React.Fragment>

        <li className='hover:text-[#f5445f] bold'><Link to='/'>Home</Link></li>
        <li className='hover:text-[#f5445f] bold'><Link to='/blog'>Blog</Link></li>


        {
            user?.uid ?
                <>
                    <li className='hover:text-[#f5445f] bold'><Link to='/deshBorad'>DeshBorad</Link></li>
                    <li className='hover:text-[#f5445f] bold'><button onClick={handleLogout}>Sing Out</button></li>
                </>
                : <li className='hover:text-[#f5445f] bold'><Link to='/login'>Login</Link></li>

        }
        <li><Link to='/singUp'>SingUp</Link></li>
    </React.Fragment>
    return (
        <div>
            <div className="navbar flex justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-2xl text-[#FB836B] font-extrabold "><span className='text-3xl font-extrabold text-[#E81E28]'>A</span>wel Headphone  <img className='w-10 m-2' src="https://png.pngtree.com/png-clipart/20221026/original/pngtree-airpods-3rd-generation-wireless-headphones-png-image_8726654.png" alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>

        </div>
    );
};

export default Navbar;