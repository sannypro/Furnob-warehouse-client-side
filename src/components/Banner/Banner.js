import React from 'react';
import bannerImg from "../../assets/img/banner-image-22-removebg-preview.png";
import bannerImg2 from "../../assets/img/shop-img24-removebg-preview.png"
import './Banner.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Carousel, CarouselItem } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className='bg-color'>
            <div className='d-flex justify-content-center  align-items-center container'>
                <div>
                    <small>FURNITURE</small>

                    <div className=''>
                        <h1>Beauty indoors</h1>
                        <p className='w-50'> The perfect place for every contemporay durniture and manufacturer.This is Furnob Warehouse</p>
                    </div>



                </div>
                <div>
                    <Carousel>
                        <Carousel.Item>
                            <img src={bannerImg} alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={bannerImg2} alt="" />
                        </Carousel.Item>
                    </Carousel>

                </div>
            </div>
        </div>
    );
};

export default Banner;