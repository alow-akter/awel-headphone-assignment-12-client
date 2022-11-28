import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider';
import Loading from '../../../Loading/Loading';

const AddProduct = () => {

    const { loading } = useContext(AuthContext)
    const imgHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate()

    const handleProduct = event => {
        event.preventDefault()
        const from = event.target
        const location = from.location.value;
        const productName = from.productName.value;
        const price = from.price.value
        const condition = from.condition.value;
        const mobileNumber = from.mobileNumber.value;
        const message = from.message.value;
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
                console.log(imgData)
                if (imgData.success) {
                    console.log(imgData.data.url)
                    const addProduct = {

                        location: location,
                        productName: productName,
                        price: price,
                        condition: condition,
                        mobileNumber: mobileNumber,
                        message: message,
                        image: imgData.data.url
                    }

                    fetch('https://awel-headphone-server.vercel.app/addProduct', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(addProduct)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            from.reset()
                            toast.success('Add product successfully')
                            navigate('/deshBorad/myProduct')
                        })
                }
            })


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
                            <div className="col-span-full sm:col-span-2">
                                <label for="productName" className="text-sm">ProductName</label>
                                <input id="product Name" type="text" name='productName' placeholder="Product Name" className="w-full rounded-md focus:ring focus:ring-opaprodrct-75 focus:ring-violet-400 input input-bordered input-warning" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label for="price" className="text-sm">Price</label>
                                <input id="price" name='price' type="text" placeholder="Price" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 input input-bordered input-warning " />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label for="location" className="text-sm">Location</label>
                                <input id="location" name='location' type="text" placeholder="Loaction" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 input input-bordered input-warning " />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label for="state" className="text-sm">Condition</label>
                                <input id="state" type="text" name='condition' placeholder="good || better || best" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-40 input input-bordered input-warning" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label for="zip" className="text-sm">Mobile number</label>
                                <input id="zip" type="text" name='mobileNumber' placeholder="Mobile Number" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 input input-bordered input-warning" />
                            </div>
                            <div className="col-span-full">
                                <label for="bio" className="text-sm">Message</label>
                                <textarea id="bio" name='message' placeholder="Message" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 textarea textarea-warning"></textarea>
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