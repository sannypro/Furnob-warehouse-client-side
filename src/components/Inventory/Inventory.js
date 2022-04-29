import axios from 'axios';
import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';


const Inventory = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/')
            .then(response => setProducts(response.data))
    }, [])
    return (
        <div className='row g-3 justify-content-center'>
            {
                products.map(product => <div className='col-lg-4 d-flex g-3 mt-5 justify-content-center'>
                    <div className="card " style={{ width: " 18rem" }}>
                        <img src={product.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.description}</p>
                            <a className="btn btn-primary">update</a>
                        </div>
                    </div>
                </div>)
            }
        </div >
    );
};

export default Inventory;