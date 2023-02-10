import React from 'react'
import logo from '../../assets/logo.png'
import './Navbar.css'
const Navbar = () => {
    return (

                    <nav className="navbar navbar-expand-lg bg-transparent">
                        <div className="container-fluid col-10 mx-auto">
                            <a className="navbar-brand " href="/">
                                <img src={logo} alt="" height={50} />
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="/">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Features</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Contact</a>
                                    </li>
                                </ul>

                                <div className="button">
                                    <a href="/" className='mx-4'>Login</a>
                                    <button className='sign-up '>Sign Up</button>
                                </div>
                            </div>
                        </div>

                    </nav>
              
    )
}

export default Navbar