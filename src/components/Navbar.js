import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <button className="icon">&#9776;</button>
                <a href="#home" className="active">Home</a>
                <a href="#news" className="news">News</a>
                <a href="#contact" className="contact">Contact</a>
                <a href="#another" className="another">Another</a>
                <div className='drop-down'>
                    <button className="icon">&#9776;</button>
                    <div className='drop-down-content'>
                        <a>1</a>
                        <a>1</a>
                        <a>1</a>
                        <a>1</a>
                    </div>
                </div>
                <div className="invs-block"></div>
                <button className="about-button">&#63;</button>
            </div>


        </div>
    )
}

export default Navbar
