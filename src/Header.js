import React from 'react'
import "./Header.css"
import logo from "./images/batman.png"

function Header() {
    return (
        <div className="header">
            <ul> 
            <img className="img" src={logo} alt="Logo" />
              <button><a>All Access</a></button>
              <li><a>Community</a></li>  
              <li><a>Tutorials</a></li>
              <li><a>Premium Courses</a></li>
            </ul>
        </div>
    )
}

export default Header
