import React from 'react'
import './About.css'
import Hero from '../../assets/images/aboutBg.png'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='about-container'>
      <img className='about-img' src={Hero} alt="" />
      <div className='about-content'>
        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p>Our mission is to enliven your road trip with the perfect travel van rental.
           Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
           (Hitch costs extra 😉)</p>

           <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
           
           <div className="about-cta">
              <h3>Your destination is waiting. Your van is ready.</h3>
              <Link to='/vans'>Explore our vans</Link>
          </div>
      </div>
      
    </div>
  )
}

export default About