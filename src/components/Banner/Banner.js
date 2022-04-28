import React from 'react';
import bannerImg from "../../assets/img/banner-image-22-removebg-preview.png"
import './Banner.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Banner = () => {
    return (
        <div className='bg-color'>
            <div className='d-flex justify-content-between  align-items-center container'>
                <div>
                    <small>FURNITURE</small>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}>

                        <SwiperSlide><h1>Beauty indoors</h1>
                            <p>The perfect place for every contemporay durniture and manufacturer.This is Furnob Warehouse</p></SwiperSlide>
                        <SwiperSlide><h1>Better interior</h1>
                            <p>The perfect place for every contemporay durniture and manufacturer.This is Furnob Warehouse</p>
                        </SwiperSlide>

                        ...
                    </Swiper>


                </div>
                <div>
                    <img src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;