import React from "react";
import './header.css';
import Features from "./Features";
import Company from "./Company";


export default function Header(){


    return(

            <nav className="navbar">
                <div>
                    <h1>test</h1>
                    <Features />
                    <Company />

                </div>
                <div>
                    <button>Login</button>
                    <button>Register</button>
                </div>
            </nav>
        
        
    )


}