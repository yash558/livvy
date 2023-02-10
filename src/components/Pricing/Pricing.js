import React from 'react'

import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const Pricing = () => {
    return (
        <div className="pricing_section">
            <div className="pricing_wrapper">
                <div className="pricing_heading">
                    <div className="pricing_container">
                        
                        <div className="pricing_container-card">
                            <div className="pricing_container-cardInfo">
                                <div className="icon">
                                    <FaFire />
                                </div>
                                <h3>Starter</h3>
                                <h4>Rs499</h4>
                                <p>Per Month</p>
                                <ul className="pricing_container-features">
                                    <li>100 Transactions</li>
                                    <li>2% Cash Back</li>
                                    <li>$10,000 Limit</li>
                                </ul>
                                <button className='btn-wide'>
                                    Choose Plan
                                </button>
                            </div>
                        </div>
                        <div className="pricing_container-card">
                            <div className="pricing_container-cardInfo">
                                <div className="icon">
                                    <FaFire />
                                </div>
                                <h3>Gold</h3>
                                <h4>Rs999</h4>
                                <p>Per Month</p>
                                <ul className="pricing_container-features">
                                    <li>100 Transactions</li>
                                    <li>3.5% Cash Back</li>
                                    <li>$10,000 Limit</li>
                                </ul>
                                <button className='btn-wide'>
                                    Choose Plan
                                </button>
                            </div>
                        </div>
                        <div className="pricing_container-card">
                            <div className="pricing_container-cardInfo">
                                <div className="icon">
                                    <BsXDiamondFill/>
                                </div>
                                <h3>Diamond</h3>
                                <h4>Rs1299</h4>
                                <p>Per Month</p>
                                <ul className="pricing_container-features">
                                    <li>Unlimited Transactions</li>
                                    <li>5% Cash Back</li>
                                    <li>$10,000 Limit</li>
                                </ul>
                                <button className='btn-wide'>
                                    Choose Plan
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing