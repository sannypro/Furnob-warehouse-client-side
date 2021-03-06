import axios from 'axios';
import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Inventory = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('https://salty-ridge-21738.herokuapp.com/inventories')
            .then(response => setProducts(response.data))
    }, [])
    const sliceProducts = products.slice(0, 6)

    return (
        <div className='row  justify-content-center mt-5'>
            <h1 className='text-center mt-5'> Inventory</h1>
            {
                sliceProducts.map(product => <div key={product._id} className='col-lg-4 relative d-flex  mt-5 justify-content-center'>
                    <div className="card " style={{ width: " 18rem" }}>
                        <img src={product.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text" >{product.description.slice(0, 150)}<button data-bs-toggle="tooltip" data-bs-placement="top" className='btn' title={product.description}>...</button></p>
                            <p>Price:${product.price}</p>
                            <p>Quantity:{product.quantity}</p>
                            <p className='mb-5'>Supllier: {product.supplier}</p>
                            <button onClick={() => navigate(`/inventory/${product._id}`)} className="btn position-absolute bottom-0  " style={{ backgroundColor: "#e4d0d0" }}>update</button>
                        </div>
                    </div>
                </div>)
            }
        </div >
    );
};

export default Inventory;