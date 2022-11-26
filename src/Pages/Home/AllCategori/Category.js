import React from 'react';

const Category = ({ category }) => {
    const { name, price, img, originalPrice, location, useDuration, condition, description, status, time } = category
    return (
        <div className='mt-20'>
            <article class="overflow-hidden rounded-lg border border-gray-100 shadow-lg shadow-slate-700">
                <img
                    alt="Office"
                    src={img}
                    class="h-[300px] w-full p-6 object-cover"
                />

                <div class="p-4 sm:p-6 mt-3">
                    <p>
                        <h2 className='text-1xl font-bold text-pink-400'>{name}</h2>
                        <p class="text-lg font-medium text-gray-900 mt-2">
                            {description}
                        </p>
                    </p>
                    <div className='flex justify-between mt-4'>
                        <small className='text-xs font-medium'>price: ${price}</small>
                        <small className='text-xs font-medium'>OriginalPrice: {originalPrice}</small>
                    </div>

                    <div className='flex justify-between mt-4'>
                        <small className='text-xs font-medium'>useDuration: {useDuration}</small>
                        <small className='text-xs font-medium'>status :{status}</small>
                    </div>

                    <div className='flex justify-between mt-4'>
                        <p className='text-1xl mt-2'>location: {location}</p>

                        <p className='text-1xl mt-2'>condition: {condition}</p>
                    </div>
                    <p className='mt-4 flex justify-end text-xs' >Date: {time}</p>
                    <button className='btn btn-outline bg-pink-400'>Buy Now</button>
                </div>
            </article>


        </div>
    );
};

export default Category;