import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from './Category';

const AllCategori = () => {

    const data = useLoaderData()

    return (
        <div className='grid lg:grid-cols-3 gap-6 mx-auto'>
            {
                data.map(category => <Category key={category._id} category={category}></Category>)
            }
        </div>
    );
};

export default AllCategori;