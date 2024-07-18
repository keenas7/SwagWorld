import React from 'react'
import '../index.css'
import './Contact.css'
import keenaSwag from '../assets/keenaSwag.jpg';

const fuckYouContact = () => {
    return (
        <div className="imgFrame">
            <img src={keenaSwag} alt="" className="keenaSwag" />
            <a href="https://www.instagram.com/keena.js/" rel="noreferrer">
                <div className="insta" ><h1>insta</h1></div>
            </a>
            <a href="https://www.instagram.com/keena.js/" rel="noreferrer">
                <div className="email"><h1>email</h1></div>
            </a>
        </div>
    )
}

export default fuckYouContact