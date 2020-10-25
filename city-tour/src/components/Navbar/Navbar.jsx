
import React from 'react'
import img from './logo.png'
import './Navbar.css'



function Navbar() {
    return (
        <nav className="navbar">
            <div className="img">
                <img src={img} alt=""/>
            </div>

            <div className="menu">
                    <ul className="grup">
                        <li className="list">
                            Home
                        </li>

                        <li className="list">
                            About
                        </li>

                        <li className="list active">
                            Tour
                        </li>
                    </ul>
            </div>
        </nav>
    )
}

export default Navbar
