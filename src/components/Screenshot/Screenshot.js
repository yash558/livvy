import React from 'react'
import './Screenshot.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import screen1 from '../../assets/screen1.png'
import screen2 from '../../assets/screen2.png'
import screen3 from '../../assets/screen3.png'
const Screenshot = () => {
    return (
        <div className="app-screenshots section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title">
                            <h2>App <span>Screenshots</span></h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="screenshots-carousel">
                        <Swiper
                            loop={true}
                            grabCursor={true}
                            autoplay={true}
                            spaceBetween={50}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,                                    
                                },
                                // when window width is >= 480px
                                300: {
                                    slidesPerView: 2,                                    
                                },
                                600: {
                                    slidesPerView: 3,
                                    
                                }
                            }}

                            slidesPerView={3}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}

        >
                            <SwiperSlide>
                                <div className="screenshot-item">
                                    <img src={screen1} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="screenshot-item">
                                    <img src={screen2} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="screenshot-item">
                                    <img src={screen3} alt="" />
                                </div>
                            </SwiperSlide>
                           

                        </Swiper>



                    </div>
                </div>
            </div>
        </div>
    )
}

export default Screenshot