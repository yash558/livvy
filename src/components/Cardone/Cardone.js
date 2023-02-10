import React from 'react'
import './Cardone.css'
const Cardone = (props) => {
    return (
    <div className="col-md-4 col-10 mx-auto">
        <div className="card" >
            <img className="card-img-top" src={props.imgSrc} alt="Card image cap" height={250}/>
            <div className="card-body">
                <h5 className="card-title fw-bold">{props.title}</h5>
                <p className="card-text ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div >
    )
}

export default Cardone