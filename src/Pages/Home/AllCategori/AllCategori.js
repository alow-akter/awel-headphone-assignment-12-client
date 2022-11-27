import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import BookingModal from '../../BookModal/BookingModal';
import Loading from '../../Loading/Loading';
import Category from './Category';

const AllCategori = () => {
    const [bookings, setBookings] = useState(null)
    const data = useLoaderData()
    const { loading } = useContext(AuthContext)
    if (loading) {
        return <Loading></Loading>
    }

    return (
        <section>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto'>
                {
                    data.map(category => <Category key={category._id} category={category}
                        setBookings={setBookings}
                    ></Category>)
                }
            </div>
            {
                bookings &&
                <BookingModal bookings={bookings}
                    setBookings={setBookings}
                ></BookingModal>}
        </section>

    )
};

export default AllCategori;