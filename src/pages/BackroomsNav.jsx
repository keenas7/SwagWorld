import React from 'react'
import '../index.css'
import './BackroomsNav.css'
import PageTitle from '../components/PageTitle';
import PageFavicon from '../components/PageFavicon';
import doorOpen from '../assets/door1open.png'
import Navbar from '../components/Navbar/Navbar';



const BackroomsNav = () => {
    return (
        <>
            <div>
                <Navbar />
            </div>

            <PageTitle title="Backrooms" />
            <PageFavicon favicon="favicon.ico"/>
            <h1 className="black">backrooms page</h1>

            <img src={doorOpen }  className="doorOpenImg"/>
        </>
    )
}

export default BackroomsNav