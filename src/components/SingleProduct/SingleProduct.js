import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
    const { inventoryId } = useParams();
    const [product, setProduct] = useState([])
    useEffect(() => {
        const getProduct = async () => {
            await axios.get(`http://localhost:5000/inventory/${inventoryId}`)
                .then(response => setProduct(response.data))

        }
        getProduct()
    }, [])
    console.log(product);
    return (
        <div className='mt-5'>
            <div className='d-flex justify-content-center'>
                <div className="card " style={{ width: " 40rem" }}>
                    <img src={product.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.description}</p>
                        <p>Price:${product.price}</p>
                        <p>Quantity:{product.quantity}</p>
                        <button className='btn btn-success'>Delivered</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;