import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageInvenrory = () => {
    const [inventories, setInventories] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/')
            .then(response => setInventories(response.data))
    }, [inventories])

    const handleDelete = id => {
        axios.delete(`http://localhost:5000/inventory/${id}`)

    }
    return (
        <div className='row g-3 justify-content-center'>
            {
                inventories.map(product => <div key={product._id} className='col-lg-4 d-flex g-3 mt-5 justify-content-center'>
                    <div className="card " style={{ width: " 18rem" }}>
                        <img src={product.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.description}</p>
                            <p>Price:${product.price}</p>
                            <p>Quantity:{product.quantity}</p>
                            <button onClick={() => handleDelete(product._id)} className='btn btn-danger'>Delete</button>

                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageInvenrory;