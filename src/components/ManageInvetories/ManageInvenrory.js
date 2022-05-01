import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ManageInvenrory = () => {
    const [inventories, setInventories] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/')
            .then(response => setInventories(response.data))
    }, [inventories])

    const handleDelete = async id => {
        await axios.delete(`http://localhost:5000/inventory/${id}`)
        toast('Item deleted')

    }
    const navigate = useNavigate()
    return (
        <div className='row  justify-content-center'>


            <div className='container '>
                <div className='text-center mt-3'>
                    <button onClick={() => navigate("/add-inventory-item")} className='btn btn-success'>Add New item</button>
                </div>
                <table className="table table-striped container">
                    <thead>
                        <tr>

                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Quantity</th>

                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            inventories.map(product => <tr key={product._id}>
                                <td><button data-bs-toggle="tooltip" data-bs-placement="top" className='btn' title={product._id}>{product._id.slice(0, 5)}...</button></td>
                                <td>{product.name}</td>
                                <td>{product.quantity}</td>

                                <td><button onClick={() => handleDelete(product._id)} className='btn btn-danger'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>




        </div>
    );
};

export default ManageInvenrory;