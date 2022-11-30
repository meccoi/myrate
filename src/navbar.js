import React from "react";
import './App.scss';

import { FiCornerUpLeft } from "react-icons/fi";

export default function Navbar(){



    function navClose(){
        const navbar = document.querySelector('.nav-content');
        const faBars = document.querySelector('.faBars');
        
        navbar.style.left = '-1150px';
        faBars.style.zIndex = '1';
      }
    return(
        <>
            <nav className="fixed">
                <div className="nav-content">
                    <FiCornerUpLeft onClick={navClose} className="FiCornerUpLeft"/>
                    <div className="nav-img">
                    <img src="https://uploads-ssl.webflow.com/6317bbe57f4063bbb4af838c/631baa6bd3f8dff7bf18c47b_Complete%20Logo%20Text%20(2).png" alt="" />
                    </div>
                    <ul>
                        <li><a href="">Demo</a></li>
                        <li><a href="">Integrations</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Resources</a></li>
                    </ul>
                    <div className="login-btn">
                        <button>Login</button>
                        <button>Get Early Access</button>
                    </div>
                </div>
            </nav>
        </>
    );
}