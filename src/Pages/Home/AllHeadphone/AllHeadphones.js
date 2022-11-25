import React, { useEffect, useState } from 'react';
import Headphones from '../Headphones/Headphones';

const AllHeadphones = () => {
    const [allHeadphones, setAllHeadphones] = useState([])

    useEffect(() => {
        fetch('http://localhost:5001/headphonesOptions')
            .then(res => res.json())
            .then(data => setAllHeadphones(data))
    }, [])
    return (
        <div>
            <div className=' grid grid-cols-3 gap-6'>
                {
                    allHeadphones.map(headphone => <Headphones
                        key={headphone._id}
                        headphone={headphone}
                    ></Headphones>)
                }
            </div>
        </div>
    );
};

export default AllHeadphones;