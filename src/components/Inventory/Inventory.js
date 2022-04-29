import axios from 'axios';
import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Inventory = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/')
            .then(response => setProducts(response.data))
    }, [])
    return (
        <div className='row g-3 justify-content-center'>
            {
                products.map(product => <div key={product._id} className='col-lg-4 d-flex g-3 mt-5 justify-content-center'>
                    <div className="card " style={{ width: " 18rem" }}>
                        <img src={product.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.description}</p>
                            <p>Price:${product.price}</p>
                            <p>Quantity:{product.quantity}</p>
                            <button onClick={() => navigate(`/inventory/${product._id}`)} className="btn btn-primary">update</button>
                        </div>
                    </div>
                </div>)
            }
        </div >
    );
};

export default Inventory;