import React from 'react'
import './Navbar.css'
import '../../index.css'
import logo from '../../assets/glasses.png'

const Navbar = () => {
    return (
        <nav className='navContainer'>
            <img src={logo} alt="" className='logo'/>
            <ul>
                <li> <a href={'/'}> Home </a> </li> 
                <li><a href={'/backroomsNav'}> Backrooms </a></li>
                <li><a href={'/gallery'}> Gallery </a></li>
                <li>Game</li>
                <li> <a href={'/contact' }> <button className='navBtn'>Contact</button> </a> </li>
            </ul>
        </nav>
    )
}

export default Navbar