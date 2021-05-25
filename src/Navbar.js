import React, { useState } from 'react'
import './index.css'
import './reset.css'



export default  function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleNavToggle = () => {
        setNavbarOpen(!navbarOpen)
    }
    return ( 
    <nav class="nav">
        <button class="nav__toggle__btn" id="nav__toggle__btn" onClick={handleNavToggle}>
            <i class="fas fa-bars"></i>
        </button>
        <ul class={`nav__ul ${navbarOpen ? "showNav" : ""}`} id="navbar">
            <li><a class="nav__a" href="#">Home</a></li>
            <li><a class="nav__a" href="#">About</a></li>
            <li><a class="nav__a" href="#">Blog</a></li>
            <li><a class="nav__a" href="#">Contact</a></li>
        </ul>
    </nav>
    )
}


