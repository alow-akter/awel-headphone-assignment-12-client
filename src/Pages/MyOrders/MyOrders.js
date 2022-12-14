import React, { useEffect, useState } from 'react';


const MyOrders = () => {
    const [myAllOrders, setMyAllOrders] = useState([])

    useEffect(() => {
        fetch('https://awel-headphone-server.vercel.app/myAllOrders')
            .then(res => res.json())
            .then(data => setMyAllOrders(data))
    }, [])

    return (
        <div>

            <div>
                <h2 className="text-3xl text-center">
                    My Orders
                </h2>
                <div className="overflow-x-auto  ">
                    <table className="table w-10/12 mx-auto mt-4 ">
                        <thead>
                            <tr>
                                <th>Serial</th>
                                <th>userName</th>
                                <th>Product Name</th>
                                <th>price</th>
                                <th>Payment</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                myAllOrders.map((orders, i) => <tr key={orders._id}>
                                    <th>{i + 1}</th>
                                    <td>{orders.userName}</td>
                                    <td>{orders.bookings}</td>
                                    <td>{orders.price}</td>
                                    <td><button className='btn btn-accent'>pay</button></td>

                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default MyOrders;