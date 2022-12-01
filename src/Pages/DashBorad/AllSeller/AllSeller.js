import React, { useState } from 'react';

const AllSeller = () => {
    const [allSeller, setAllSeller] = useState([])
    fetch('https://awel-headphone-server.vercel.app/allSeller')
        .then(res => res.json())
        .then(data => setAllSeller(data))
    return (
        <div >
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>

                        {

                            allSeller.map((seller, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td>{seller.role}</td>
                            </tr>
                            )

                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;