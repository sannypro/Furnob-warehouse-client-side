import React from 'react';
import thinkingImg from '../../assets/img/6-pimage1-ht-501-008-01-ht-501-008-02-ht-501-008-03.jpg'

import './ThinkingSection.css'
const ThinkingSection = () => {


    return (
        <div className='d-flex justify-content-center align-items-center container'>
            <div className='row  mt-5 '>
                <div className=' col-lg-6 d-flex align-items-center'>
                    <div>
                        <h1>
                            New <br />
                            GENUINELY FRESH
                            WAY OF THINKING

                        </h1>
                        <p>we provide you with Modern Sleek Designs Furniture. that would revamp your space into a one-of-a-kind home. Kami creates elegant furniture featuring a basic Nordic aesthetic. Every product of Kami Furniture Store is designed to emphasis on the minutiae of usage and longevity.</p>
                    </div>
                </div>
                <div className='col-lg-6 d-flex  justify-content-end'>
                    <img className='img-fluid rounded-img' src={thinkingImg} alt="" />
                </div>
            </div >
        </div>

    );
};

export default ThinkingSection;