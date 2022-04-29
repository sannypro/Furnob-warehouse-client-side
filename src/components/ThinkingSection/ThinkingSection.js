import React from 'react';
import thinkingImg from '../../assets/img/home-2-img-5.jpg'
const ThinkingSection = () => {
    return (
        <div className='row container mt-5 justify-content-center align-items-center'>
            <div className=' col-lg-6'>
                <h1>
                    New <br />
                    GENUINELY FRESH
                    WAY OF THINKING

                </h1>
                <p>we provide you with Modern Sleek Designs Furniture. that would revamp your space into a one-of-a-kind home. Kami creates elegant furniture featuring a basic Nordic aesthetic. Every product of Kami Furniture Store is designed to emphasis on the minutiae of usage and longevity.</p>
            </div>
            <div className='col-lg-6 d-flex  justify-content-end'>
                <img className='img-fluid' src={thinkingImg} alt="" />
            </div>
        </div >
    );
};

export default ThinkingSection;