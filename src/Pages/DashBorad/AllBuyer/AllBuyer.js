import React, { useState } from 'react';

const AllBuyer = () => {
    const [allBuyer, setAllBuyer] = useState([])
    fetch('http://localhost:5001/allBuyer')
        .then(res => res.json())
        .then(data => setAllBuyer(data))
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

                            allBuyer.map((buyer, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td>{buyer.role}</td>
                            </tr>
                            )

                        }

                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default AllBuyer;