import React from 'react'
import Logo from '../images/logo.svg'
import Features from './Features'
import Company from './Company'
import { useState } from 'react'


function Header(){

    const [navBar, showNav] = useState(false);

    const mobileNavShow = () => {

      showNav(!navBar)

    }

  return (
<React.Fragment>
    <header className='nav_container'>

        <nav className='logo_list_container'>

            <div className='logo_container'>

                <img src={Logo} alt = 'Logo snap app icon' />

            </div>

            <div className='list_container'>

                <ul>

                    <li><Features /></li>
                    <li><Company /></li>
                    <li>Careers</li>
                    <li>About</li>

                </ul>

            </div>

            <div onClick={mobileNavShow} className="burger_container">

             
             <div className="sub_burger_container">

                <div className="bar1">

                </div>

                <div className="bar2">

                </div>

                <div className="bar3">
                  
                </div>

             </div>
            </div>

        </nav>

        <div  className='button_container'>

            <button className='button_login'>Login</button>
            <button className='button_register'>Register</button>
            
        </div>
        
        
    </header>
  

</React.Fragment>
  )


}

export default Header