import React from 'react'
import { useState } from 'react'
import '../index.css'
import './Gallery.css'
import Navbar from '../components/Navbar/Navbar';
import PageTitle from '../components/PageTitle';
import skirt1 from '../assets/skirt.jpg';
import shirt1 from '../assets/top.jpg';
import skirt2 from '../assets/smallskirt.jpg'
import shirt2 from '../assets/shirt.jpg'

import nature1 from '../assets/nature1.jpg'
import nature2 from '../assets/nature2.jpg'
import nature3 from '../assets/nature3.jpg'
import nature4 from '../assets/nature4.jpg'
import nature5 from '../assets/nature5.jpg'
import nature6 from '../assets/nature6.jpg'
import nature7 from '../assets/nature7.jpg'
import nature8 from '../assets/nature8.jpg'
import nature9 from '../assets/nature9.jpg'
import nature10 from '../assets/nature10.jpg'
import nature11 from '../assets/nature11.jpg'
import nature12 from '../assets/nature12.jpg'
import nature13 from '../assets/nature13.jpg'
import nature14 from '../assets/nature14.jpg'

import swag1 from '../assets/swag1.jpg'
import swag2 from '../assets/swag2.jpg'
import swag3 from '../assets/swag3.jpg'
import swag4 from '../assets/swag4.jpg'
import swag5 from '../assets/swag5.jpg'
import swag6 from '../assets/swag6.jpg'
import swag7 from '../assets/swag7.jpg'
import swag8 from '../assets/swag8.jpg'
import swag9 from '../assets/swag9.jpg'
import swag10 from '../assets/swag10.jpg'
import swag11 from '../assets/swag11.jpg'

import coco1 from '../assets/coco1.jpg'
import coco2 from '../assets/coco2.jpg'
import coco3 from '../assets/coco3.jpg'
import coco4 from '../assets/coco4.jpg'
import coco5 from '../assets/coco5.jpg'
import coco6 from '../assets/coco6.jpg'
import coco7 from '../assets/coco7.jpg'
import coco8 from '../assets/coco8.jpg'
import coco9 from '../assets/coco9.jpg'
import coco10 from '../assets/coco10.jpg'
import coco11 from '../assets/coco11.jpg'
import coco12 from '../assets/coco12.jpg'
import coco13 from '../assets/coco13.jpg'
import coco14 from '../assets/coco14.jpg'

import art1 from '../assets/art1.jpg'
import art2 from '../assets/art2.jpg'
import art3 from '../assets/art3.jpg'
import art4 from '../assets/art4.jpg'
import art5 from '../assets/art5.jpg'
import art6 from '../assets/art6.jpg'
import art7 from '../assets/art7.jpg'
import art8 from '../assets/art8.jpg'
import art9 from '../assets/art9.jpg'
import art10 from '../assets/art10.jpg'
import art11 from '../assets/art11.jpg'
import art12 from '../assets/art12.jpg'
import art13 from '../assets/art13.jpg'
import art14 from '../assets/art14.jpg'
import art15 from '../assets/art15.jpg'
import art16 from '../assets/art16.jpg'
import art17 from '../assets/art17.jpg'
import art18 from '../assets/art18.jpg'
import art19 from '../assets/art19.jpg'
import art20 from '../assets/art20.jpg'
import art21 from '../assets/art21.jpg'
import art22 from '../assets/art22.jpg'
import art23 from '../assets/art23.jpg'
import art24 from '../assets/art24.jpg'
import art25 from '../assets/art25.jpg'




const Gallery = () => {

    const [galleryCategory, setGalleryCategory] = useState('sewing');

      const galleries = {
        sewing: [skirt1, shirt1, shirt2, skirt2],
          nature: [nature1, nature2, nature3, nature8, nature5, nature6, nature7, nature9, nature10, nature4, nature11, nature12, nature13, nature14],
          art: [art1, art3, art6, art9, art10, art4, art11, art8, art7, art13, art20, art5, art14, art15, art16, art17, art25, art18, art22, art19, art21, art23, art24, art12],
          swag: [swag1, swag3, swag8, swag5, swag6, swag7, swag10, swag4, swag11, swag2, swag9],
          coco: [coco1, coco2, coco3, coco8, coco5, coco6, coco7, coco9, coco10, coco4, coco11, coco12, coco13, coco14],

    };

    return (
        <div className="k">

            <div>
                <Navbar />
            </div>

            <PageTitle title="gallery" />

            <div className="container">
                <h1 className="galleryDiv"> GALLERY </h1>
            </div>

            <section id="gallery1">

            <div className="flexBox">

                <div className="sideBar">
                    <ul>
                        <li> <button onClick={() => setGalleryCategory('sewing')} className='navBtn'>Sewing</button> </li>
                        <li> <button onClick={() => setGalleryCategory('nature')} className='navBtn'>Nature </button></li>
                        <li> <button onClick={() => setGalleryCategory('art')} className='navBtn'>Artwork </button></li>
                        <li> <button onClick={() => setGalleryCategory('swag')} className='navBtn'>Swag </button></li>
                        <li> <button onClick={() => setGalleryCategory('coco')} className='navBtn'>Coco </button></li>
                    </ul>
                </div>

                <div id="gallery-content" className="gallery">
                    {galleries[galleryCategory].map((src, index) => (
                        <img key={index} src={src} alt={`${galleryCategory} Image`} />
                    ))}
                </div>

            </div>


            </section>
           

        </div>
    )
}

export default Gallery