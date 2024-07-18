import React from 'react'
import './Hero.css'
import '../../index.css'
import door from '../../assets/door1pink.png'

const Hero = () => {
    return (
        <div className="doorFrame">
            <div className="test"> </div>
            <img src={door} alt="" className="doorImg" />
            <a href={"backrooms.html"} rel="noreferrer">
                <div className="enterDoor" ></div>
            </a>

            
            
        </div>

       
    )
}

export default Hero