import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div class="navbar" id="myTopnav">
            <button class="icon">&#9776;</button>
            <a href="#home" class="active">Home</a>
            <a href="#news" class="news">News</a>
            <a href="#contact" class="contact">Contact</a>
            <a href="#another" class="another">Another</a>
            <div class="invs-block"></div>
            <button class="about-button">&#63;</button>
        </div>
    )
}

export default Navbar
