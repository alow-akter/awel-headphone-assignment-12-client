import React from 'react';

const Product = ({ product }) => {
    const { productName, image, message, condition, price } = product
    return (
        <div>
            <div className="max-w-xs p-6 rounded-md shadow-lg shadow-gray-500 ml-4">
                <img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 " />
                <div className="mt-6 mb-2">

                    <h2 className="text-xl font-semibold tracking-wide">{productName}</h2>
                </div>
                <p className="">{message}</p>
                <div className='flex justify-between'>
                    <small>condition: {condition}</small>
                    <small>price: {price}</small>
                </div>
            </div>
        </div>
    );
};

export default Product;