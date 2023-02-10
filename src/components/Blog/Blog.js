import React from 'react'
import Cardone from '../Cardone/Cardone'
import cardData from '../Cardone/cardData'
import './Blog.css'
const Blog = () => {
    return (
        <div className="blog">
            <div className="mb-5">
                <h1 className="text-center">Recent <span> Blog</span></h1>
                <p className='text-center mx-2'>Our latest features implement are posted in the blog section</p>
            </div>
            <div className="container-fluid mb-5 ">
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-10 ">
                        <div className="row gy-5">
                            {cardData.map((val, index) => {
                                return (
                                    <Cardone
                                        key={index}
                                        imgSrc={val.imgSrc}
                                        title={val.title}
                                    />
                                );
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Blog