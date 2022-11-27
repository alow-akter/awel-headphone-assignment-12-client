import React, { useContext } from 'react';
import { AuthContext } from '../../../../Context/AuthProvider';
import Loading from '../../../Loading/Loading';

const AddProduct = () => {

    const { user, loading } = useContext(AuthContext)
    const imgHostKey = process.env.REACT_APP_imgbb_key;
    const handleProduct = event => {
        event.preventDefault()
        const from = event.target
        const userName = from.userName.value;
        const email = from.email.value
        const location = from.location.value;
        const productName = from.productName.value;
        const condition = from.condition.value;
        const mobileNumber = from.mobileNumber.value;
        const Message = from.Message.value;
        const image = from.image.files[0]
        const fromData = new FormData()
        fromData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`
        fetch(url, {
            method: 'POST',
            body: fromData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData.image.url)

            })

        console.log(userName, email, location, productName, condition, mobileNumber, Message, image)
    }

    if (loading) {
        <Loading></Loading>
    }
    return (
        <div className='h-[100vh]'>
            <section className="p-10 h-full">
                <form onSubmit={handleProduct} action="" className="container flex flex-col mx-auto ">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm">

                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label for="firstName" className="text-sm">UserName</label>
                                <input id="firstName" type="text" name='userName' disabled defaultValue={user?.displayName} placeholder="User name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 input input-bordered input-warning" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label for="email" className="text-sm">Email</label>
                                <input id="email" type="email" name='email' placeholder="Email" disabled defaultValue={user?.email} className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:ring-violet-400 input input-bordered input-warning" />
                            </div>

                            <div className="col-span-full sm:col-span-3">
                                <label for="location" className="text-sm">Location</label>
                                <input id="location" name='location' type="text" placeholder="Loaction" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 input input-bordered input-warning " />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label for="productName" className="text-sm">ProductName</label>
                                <input id="product Name" type="text" name='productName' placeholder="Product Name" className="w-full rounded-md focus:ring focus:ring-opaprodrct-75 focus:ring-violet-400 input input-bordered input-warning" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label for="state" className="text-sm">Condition</label>
                                <input id="state" type="text" name='condition' placeholder="Condition" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-40 input input-bordered input-warning" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label for="zip" className="text-sm">Mobile number</label>
                                <input id="zip" type="text" name='mobileNumber' placeholder="Mobile Number" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 input input-bordered input-warning" />
                            </div>
                            <div className="col-span-full">
                                <label for="bio" className="text-sm">Message</label>
                                <textarea id="bio" name='Message' placeholder="Message" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 textarea textarea-warning"></textarea>
                            </div>
                            <div className="col-span-full">
                                <label for="bio" className="text-sm">Photo</label>
                                <div className="flex items-center space-x-2">
                                    <input type="file" name='image'
                                        className="input input-bordered w-full" />
                                </div>
                            </div>
                            <input className='btn  col-span-full' value="AddA A Product" type="submit" />
                        </div>
                    </fieldset>

                </form>
            </section>
        </div>
    );
};

export default AddProduct;