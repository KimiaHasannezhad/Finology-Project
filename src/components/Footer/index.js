import React from 'react'

function Footer() {
    return (
        <div className="footer-section">
            <div className="footer-logo">
                <img src={require('../../assets/logo.png').default}></img>
                <h2>Easy Work</h2>
            </div>
            <div className="address" >
                <span>Address</span>
                <p>52-1, jalan awan Hijau, Taman overseas union, 58200 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur</p>
            </div>

            <div className="contactInfo">
                <span>Contact</span>
                <p>03-7451 5283</p>
                <span>Fax</span>
                <p>03-7451 5283</p>
            </div>

            <div className="footer-shape">
                <img src={require('../../assets/img/shapes/footer/footer-rounded-001.svg').default}></img>
            </div>
        </div>
    )
}

export default Footer

