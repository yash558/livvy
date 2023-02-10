import React from 'react'
import './Feature.css'
import Card from './../Card/Card';
const Feature = () => {
  return (
    <div className="feature" id="feature">
       <div className="feature_title">
        <h3>Some Excellent Features For You</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, aut Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>        
       </div>
       <div className="feature_card">
        <Card title="Easy Shopping" desc="This is best shopping app for shopping live"/>
        <Card title="Easy Shopping" desc="This is best shopping app for shopping live"/>
        <Card title="Easy Shopping" desc="This is best shopping app for shopping live"/>
       </div>
    </div>
  )
}

export default Feature;