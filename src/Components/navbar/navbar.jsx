import React from "react";

import './navbar.css';
import logo from './logo.svg'


export const NavBar = () => ( 
<nav className = "navbar" >
    <img className = "logo-nav"
        src = { logo }
        alt = 'logoIBM'/>
    <div className="user">
        <button className="signin"></button>
    </div>
</nav>
)