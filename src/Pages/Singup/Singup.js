import React from 'react';
import { Link } from 'react-router-dom';

const Singup = () => {
    return (
        <div>
            <section className="p-6 dark:text-gray-100">
                <form novalidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-900 ng-untouched ng-pristine ng-valid">
                    <h2 className="w-full text-3xl font-bold leading-tight">Please Sing Up</h2>
                    <div>
                        <label for="name" className="block mb-1 ml-1">Name</label>
                        <input id="name" type="text" placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800" />
                    </div>
                    <div>
                        <label for="email" className="block mb-1 ml-1">Email</label>
                        <input id="email" name='email' type="email" placeholder="Your Email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800" />
                    </div>
                    <div>
                        <label for="passwor" className="block mb-1 ml-1">Password</label>
                        <input id="name" name='password' type="password" placeholder="Your Password" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800" />
                    </div>
                    <div>
                        <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 dark:text-gray-900">Submit</button>
                    </div>
                    <p className='mt-3 text-xs'>Already have an account<Link className='mx-2 text-primary font-medium' to="/login">Please Login</Link></p>
                    <div className="divider">OR</div>
                    <button className='w-full btn btn-outline rounded-lg'>CONTINUE WITH GOOGLE</button>
                </form>

            </section>
        </div>
    );
};

export default Singup;