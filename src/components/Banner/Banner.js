import React from 'react';
import bannerImg from "../../assets/img/banner-image-22-removebg-preview.png";
import bannerImg2 from "../../assets/img/shop-img24-removebg-preview.png"
import './Banner.css';

import 'swiper/css';
import { Carousel, CarouselItem } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className='bg-color'>
            <Carousel className='row'>
                <CarouselItem>
                    <div className='d-flex justify-content-center  align-items-center container'>
                        <div>
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
                        <div className='d-flex justify-content-end w-75'>
                            <div className='ms-5'>


                                <div><img src={bannerImg} alt="" /></div>

                            </div>

                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className='d-flex justify-content-center  align-items-center container'>
                        <div>
                            <small>FURNITURE</small>

                            <div>
                                <div>
                                    <div className=''>
                                        <h1>Better Interior</h1>
                                        <p className=''> The perfect place for every contemporay durniture and manufacturer.This is Furnob Warehouse</p>
                                    </div>
                                </div>

                            </div>



                        </div>
                        <div className='d-flex justify-content-end w-75'>
                            <div className='ms-5'>



                                <div>
                                    <img src={bannerImg2} alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
                </CarouselItem>
            </Carousel>
        </div>
    );
};

export default Banner;