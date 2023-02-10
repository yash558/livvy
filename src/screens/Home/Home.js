import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero.'
import Blog from '../../components/Blog/Blog'
import Review from '../../components/Review/Review'
import Footer from '../../components/Footer/Footer'
import Pricing from '../../components/Pricing/Pricing'
import Video from '../../components/Video/Video'
import Screenshot from '../../components/Screenshot/Screenshot'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/> 
        <Video/>
        <Blog/>  
        <Screenshot/>      
        <Review/>
        <Footer/>
        
        
    </div>
  )
}

export default Home