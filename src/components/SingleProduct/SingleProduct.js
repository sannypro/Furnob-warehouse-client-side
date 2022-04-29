import { async } from '@firebase/util';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const SingleProduct = () => {
    const { inventoryId } = useParams();
    const [product, setProduct] = useState([])
    useEffect(() => {
        const getProduct = async () => {
            await axios.get(`http://localhost:5000/inventory/${inventoryId}`)
                .then(response => setProduct(response.data))

        }
        getProduct()
    }, [product.quantity])

    let newQuantity;
    const handleDelivered = async () => {
        const productQuantity = parseInt(product.quantity)
        newQuantity = productQuantity - 1
        product.quantity = newQuantity
        const newData = { quantity: product.quantity }
        axios.put(`http://localhost:5000/inventory/${inventoryId}`, newData)
            .then(response => setProduct(response.data))

    }
    let reStock;
    const hanldeRestock = async (e) => {
        e.preventDefault()

        reStock = parseInt(e.target.reStock.value)
        console.log(reStock);
        const reStockQuantity = parseInt(reStock)
        const totalReStockQuantity = reStockQuantity + parseInt(product.quantity)
        const newReStockQuantity = { quantity: totalReStockQuantity }

        if (reStockQuantity <= 0) {

            toast('Please Input valid amount')

            return
        }

        axios.put(`http://localhost:5000/inventory/${inventoryId}`, newReStockQuantity)
            .then(response => setProduct(response.data))
    }

    return (
        <div className='mt-5 row align-items-center'>
            <div className='d-flex justify-content-center col-lg-6'>
                <div className="card " style={{ width: " 18rem" }}>
                    <img src={product.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.description}</p>
                        <p>Price:${product.price}</p>
                        <p>Quantity: {product.quantity}</p>
                        <button onClick={handleDelivered} className='btn btn-success'>Delivered</button>
                    </div>
                </div>
            </div>
            <div className='text-center mt-4 mb-4 col-lg-6'>
                <form onSubmit={hanldeRestock}>
                    <h1>Re stock this items</h1>
                    <label className="form-label" htmlFor="reStock">Enter the quantity </label>
                    <input className="form-control w-50 mx-auto" type="number" name='reStock' />
                    <button type="submit" className="btn w-25 mx-auto btn-success mt-3">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default SingleProduct;