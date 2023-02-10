import React from 'react'
import './Hero.css'
import video from '../../assets/shopping.mp4'
const Hero = () => {
    return (
        <section className="hero d-flex align-items-center justify-content-center">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-lg-0 order-2 order-lg-1 live_title d-flex justify-content-center flex-column">
                                <h1>Live Shopping with <br /> your Favorite Creators: <br /> <strong>Unleash Your Creativity!</strong></h1>
                                <p className='my-2'>
                                    Introducing Livvy, the revolutionary one-stop lifestyle video shopping platform! We make it easy
                                    for small and medium-sized enterprises, as well as individual creators, to showcase and sell
                                    their products through the convenience of video.
                                </p>

                                <div className="mt-3 hero_btn">
                                    <a href="/" className='btn-get-started'>Get Started</a>
                                </div>
                            </div>
                            <div className="col-lg-2 order-1 order-lg-2 header-img">
                                <video src={video} autoPlay loop></video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero