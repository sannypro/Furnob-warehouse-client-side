import React, { useState } from 'react';
import bannerImg from "../../assets/img/banner-image-22-removebg-preview1.png";
import bannerImg2 from "../../assets/img/shop-img24-removebg-preview.png"
import './Banner.css';

import 'swiper/css';


const Banner = () => {
    const [slide, setSlide] = useState(false)

    return (
        <div className='bg-color'>
            <div className='d-flex justify-content-center align-items-center container'>


                <div className='d-flex justify-content-center row align-items-center container'>
                    <div className='col-lg-6'>
                        <small>FURNITURE</small>

                        <div>
                            <div>
                                <div className=''>
                                    <h1>Beauty indoors</h1>
                                    <p className=''> The perfect place for every contemporay durniture and manufacturer.This is Furnob Warehouse</p>
                                </div>
                            </div>

                        </div>



                    </div>
                    <div className='d-flex justify-content-end col-lg-6 '>
                        <div>


                            <div><img className='img-fluid banner-img' src={bannerImg} alt="" /></div>

                        </div>

                    </div>
                </div>




            </div>
        </div >
    );
};

export default Banner;