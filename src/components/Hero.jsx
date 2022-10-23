import React, { useState,useEffect } from 'react'
import imageDesktop from '../images/image-hero-desktop.png';
import imageMobile from '../images/image-hero-mobile.png';

function Hero() {

    const [mobile, matchScreen] = useState(
        window.matchMedia("min-width: 344px )").mobile
        );
    useEffect(()=>{

        window.matchMedia("(min-width: 344px )")
        .addEventListener('change', e => matchScreen(e.mobile));
    },[])

  return (
    <main className='main_container '>
        <div className='heading_images_container'>
            <div className='heading_images'>
                <h1>Make<br></br>remote work</h1>
                <div>

                </div>
            </div>
            <div className='hero_image_container'>
                 {mobile && (<img src={imageDesktop} alt='image desktop for hero ' />
                    )}
                 {!mobile &&  (<img src={imageMobile} alt='image desktop for hero ' />
                 )}
            </div>
        </div>
    </main>
  )
}

export default Hero