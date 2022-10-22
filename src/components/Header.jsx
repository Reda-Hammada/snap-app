import React from 'react';
import Logo from '../images/logo.svg'
import Features from './Features';
import Company from './Company';


function Header() {
  return (
    <div className='nav_container'>
        <div className='logo_list_container'>
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
        </div>
        <div className='button_container'>
            <button className='button_login'>Login</button>
            <button className='button_register'>Register</button>
        </div>
        
        
    </div>
  )
}

export default Header