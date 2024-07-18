import React from 'react'
import '../index.css'
import './Header.css'
import title from '../assets/swagworldtitletest.png'


const Header = () => {
    return (
        <header className="swagworldImg">
            <img src={title} />
            <div className="titleText">
                <h4>by Keena</h4>
            </div>
            
        </header>
    )
}

export default Header