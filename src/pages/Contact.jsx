import React from 'react'
import '../index.css'
import './Contact.css'
import Navbar from '../components/Navbar/Navbar';
import PageTitle from '../components/PageTitle';
import FuckYouContact from './fuckYouContact';


const Contact = () => {
    return (
        <div className="k">

            <div>
                <Navbar />
            </div>

            <PageTitle title="contacts" />

            <div className="container">
                <h1 className="ugh"> CONTACTS </h1>
            </div>

            <div className="container">
                <FuckYouContact />
            </div>

           

        </div>
    )
}

export default Contact