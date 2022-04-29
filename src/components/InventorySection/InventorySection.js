import React from 'react';
import inventoryImg from '../../assets/img/home-2-image-1.jpg'

const InventorySection = () => {
    return (

        <div className='d-flex justify-content-center'>
            <div className='row align-items-center justify-content-center mt-5 container'>
                <div className='col-lg-6'>
                    < h1 > furnob FURNITURE</ h1>
                    <p>A furniture warehouse where modernity crosses elegance, we stock   Modern Sleek Designs Furniture. that would revamp your space into a one-of-a-kind home. furnob stock elegant furniture featuring a basic Nordic aesthetic. Every product of furnob Furniture warehouse is designed to emphasis on the minutiae of usage and longevity.</p>
                </div >
                <div className='col-lg-6'>
                    <img className='img-fluid' src={inventoryImg} alt="" />
                </div>
            </div >
        </div>

    );
};

export default InventorySection;