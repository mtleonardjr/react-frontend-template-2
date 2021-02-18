import React from 'react'
import './Layout2.css'
import Navbar from './Navbar'

const HolyGrail = () => {
    return (
        <div className="container">
            <div className="one">1</div>
            <div className="flex-container">
            <Navbar />
            <div className="three">3</div>
            <div className="four">4</div>
            </div>
            <div className="five">5</div>
        </div>
    )
}

export default HolyGrail
