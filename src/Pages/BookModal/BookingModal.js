import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';

const BookingModal = ({ bookings }) => {
    const { name, time, price } = bookings
    const { user } = useContext(AuthContext)
    console.log(user);
    const handleSubmit = event => {
        event.preventDefault()
        const from = event.target
        const name = from.name.value;
        const email = from.email.value
        const location = from.location.value;
        const phone = from.phone.value;
        const price = from.price.value
        console.log(name, email, location, phone, price)
        from.reset()
        toast.success('Booking confirm')

    }
    return (
        <>
            <input type="checkbox" id="category-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative  bg-slate-300">
                    <label htmlFor="category-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold ">{name}</h3>
                    <form onSubmit={handleSubmit} className='gap-4 grid grid-cols-1 p-2 rounded-lg mt-4'>
                        <input type="text" disabled value={time} className="input w-full input-bordered bg-slate-200" />
                        <input name="name" type="text" placeholder="Your Name" defaultValue={user?.displayName} disabled className="input w-full input-bordered  " />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Your Email" className="input w-full input-bordered " />

                        <input name="phone" type="text" placeholder="Your Phone Number" className="input w-full input-bordered  " />

                        <input name="location" type="text" placeholder="your location" className="input w-full input-bordered  " />

                        <input name="price" type="text" value={price} placeholder="Your price" className="input w-full input-bordered  " />


                        <input className='w-full  btn btn-accent text-white' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;