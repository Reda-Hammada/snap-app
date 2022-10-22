import React from 'react';
import Logo from '../images/logo.svg'
import Features from './Features';
import Company from './Company';


function Header() {
  return (
    <div className='nav_container'>
        <div>


            <div>
                <img src={Logo} alt = 'Logo snap app icon' />
            </div>
            <div>
                <Features />
                <Company />
                <p>Careers</p>
                <p>About</p>
            </div>
        </div>
        <div>
            <button>Login</button>
            <button>Register</button>
        </div>
        
        
    </div>
  )
}

export default Header