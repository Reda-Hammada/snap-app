import React from "react";
import './header.css';
import Features from "./Features";
import Company from "./Company";


export default function Header(){


    return(

        <div>
            <nav className="navbar">
                <div>
                    <h1>test</h1>
                    <Features />
                    <Company />

                </div>
                <div>

                </div>
            </nav>
        </div>
        
    )


}