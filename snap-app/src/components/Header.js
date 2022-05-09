import React from "react";
import './header.css';
import Features from "./Features";
import Company from "./Company";
import logo  from './images/logo.svg';


export default function Header(){


    return(

            <nav className="navbar">
              <div className="subNav">
              <img className ="logo" src={logo}  alt="logo" />
                        
                            <Features />
                            <Company />
                            <p>Careers</p>
                            <p>About</p>

                    
              </div>
                        
                    <div className="buttonContainer">
                        <button className="login">Login</button>
                        <button className="register">Register</button>
                    </div>
                 
            </nav>
        
        
    )


}