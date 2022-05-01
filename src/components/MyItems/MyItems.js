import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [myItems, setMyItems] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/my-items?email=${user.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(response => setMyItems(response.data))
    }, [myItems])
    const handleDelete = async id => {
        await axios.delete(`http://localhost:5000/inventory/${id}`)
        toast('Item deleted')


    }
    return (
        <div className='container'>
            <h1 className='text-center'>your items</h1>
            <div className='row'>
                {
                    myItems.map(product => <div key={product._id} className='col-lg-4 relative d-flex  mt-5 justify-content-center'>
                        <div className="card " style={{ width: " 18rem" }}>
                            <img src={product.img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text" >{product.description.slice(0, 150)}<button data-bs-toggle="tooltip" data-bs-placement="top" className='btn' title={product.description}>...</button></p>
                                <p>Price:${product.price}</p>
                                <p>Quantity:{product.quantity}</p>
                                <p className='mb-5'>Supllier: {product.supplier}</p>
                                <button onClick={() => handleDelete(product._id)} className='btn btn-danger'>Delete</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyItems;