import React, { useContext } from 'react';
import { GoogleAuthProvider } from 'firebase/auth'
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';



const Login = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const { googleProviderLogin, logIn } = useContext(AuthContext)
    const [loginError, setLoginError] = useState('')



    const handleLogin = data => {
        setLoginError('')
        logIn(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user);
                toast.success("User Created successfully")
                reset()

            })
            .catch(error => {
                console.error(error.message)
                setLoginError(error.message)
            })

    }


    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSingIn = () => {
        googleProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error =>
                console.error(error)
            )
    }

    return (
        <div>
            <div className=' h-[600px]  flex justify-center items-center'>
                <div className='w-96 p-6 rounded-lg bg-slate-300'>
                    <h2 className='text-xl text-center'> Please Sing Up</h2>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"  {...register("email", {
                                required: "email is required"
                            }
                            )}
                                className="input input-bordered w-full" />
                            {
                                errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"  {...register("password", {
                                required: "Password is required ",
                                minLength: { value: 6, message: 'Password must be 6 character' },
                                pattern: {
                                    value: /(?=.*[A-Z])(?=.*[0-9])/
                                    , message: 'Password must have uppercase special character '
                                }
                            })}
                                className="input input-bordered w-full max-w-xs" />
                            {
                                errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                        </div>
                        <input className='btn bg-[#FFBAA6] hover:bg-[#FB836B] w-full mt-6' value="Sing Up" type="submit" />
                        {loginError && <p className='text-red-500'>{loginError}</p>}

                    </form>
                    <p className='mt-3 text-xs'>Create new account<Link className='mx-2 text-primary font-medium' to="/singup">Please Singup</Link></p>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogleSingIn} className='w-full btn btn-outline rounded-lg hover:bg-[#FB836B]'>GOOGLE</button>

                </div>
            </div>
        </div>
    );
};

export default Login;
