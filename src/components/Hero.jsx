import React, { useState,useEffect } from 'react'
import imageDesktop from '../images/image-hero-desktop.png';
import imageMobile from '../images/image-hero-mobile.png';
import databiz  from '../images/client-databiz.svg';
import audiophile from '../images/client-audiophile.svg';
import maker from '../images/client-maker.svg';
import meet from '../images/client-meet.svg'; 

function Hero() {

    const [mobile, matchScreen] = useState(

        window.matchMedia("max-width: 840px )").mobile
        
        );

    useEffect(()=>{

        window.matchMedia("(max-width: 840px )")
        .addEventListener('change', e => matchScreen(e.matches));
        
    },[])

  return (
    <main className='main_container '>
        <div className='heading_images_container'>
            <div className='heading_images'>
                <h1>Make remote work</h1>
                <p>Get your team in sync,no matter your location
                    Streamline processes,create team rituals, and 
                    watch productivity soar .</p>
                <div className="button_hero_container">
                        <button>Learn more</button>
               </div>

                <div className='images_container'>

                    <img src={databiz} alt='databiz svg' />
                    <img src={audiophile} alt ='audiophile svg'/>
                    <img src={meet} alt='meet svg' />
                    <img src={maker} alt='maker svg' />
                    
                </div>
            </div>
            <div className='hero_image_container'>
                 {mobile && (<img src={imageDesktop} alt=' desktop for hero ' />
                    )}
                 {!mobile &&  (<img src={imageMobile} alt=' desktop for hero ' />
                 )}
            </div>
        </div>
    </main>
  )
}

export default Hero