import React, { useEffect, useState } from 'react';
import Product from './Product';

const MyProduct = () => {
    const [myProduct, SetMyProduct] = useState()
    useEffect(() => {
        fetch('https://awel-headphone-server.vercel.app/myProduct')
            .then(res => res.json())
            .then(data => SetMyProduct(data))
    }, [])
    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3 mt-5'>
            {myProduct &&
                myProduct.map(product => <Product key={product._id} product={product}></Product>)
            }
        </div>
    );
};

export default MyProduct;