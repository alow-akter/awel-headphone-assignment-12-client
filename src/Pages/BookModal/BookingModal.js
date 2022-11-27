import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';

const BookingModal = ({ bookings, setBookings }) => {
    const { name, price } = bookings
    const { user } = useContext(AuthContext)
    const handleSubmit = event => {
        event.preventDefault()
        const from = event.target
        const productName = from.productName.value
        const name = from.name.value;
        const email = from.email.value
        const location = from.location.value;
        const phone = from.phone.value;
        const price = from.price.value;

        const headphoneBooking = {
            time: new Date().toLocaleString(),
            bookings: productName,
            userName: name,
            userEmail: email,
            userLocation: location,
            userPhone: phone,
            price: price

        }

        fetch('http://localhost:5001/myOrders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(headphoneBooking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBookings(null)
                toast.success('Booking confirm')
                from.reset()
            })


    }
    return (
        <>
            <input type="checkbox" id="category-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative  bg-slate-300">
                    <label htmlFor="category-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold ">{name}</h3>
                    <form onSubmit={handleSubmit} className='gap-4 grid grid-cols-1 p-2 rounded-lg mt-4'>

                        <input type="text" name='productName' placeholder='Pro
                        duct name' disabled value={name} className="input w-full input-bordered bg-slate-200" />

                        <input name="name" type="text" placeholder="Your Name" defaultValue={user?.displayName} disabled className="input w-full input-bordered  " />

                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Your Email" className="input w-full input-bordered " />

                        <input name="phone" type="text" placeholder="Your Phone Number" className="input w-full input-bordered  " />

                        <input name="location" type="text" placeholder="your location" className="input w-full input-bordered  " />

                        <input name="price" disabled type="text" value={price} placeholder="Your price" className="input w-full input-bordered  " />


                        <input className='w-full  btn btn-accent text-white' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;