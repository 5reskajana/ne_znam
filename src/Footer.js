import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {
    faFacebook,
    faInstagram
} from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <div className='footer'>
            <div className="logo">[FreeCV]</div>
            <div className='socials'>
                <p>Get connected with us on social networks: </p>
                <a href="https://www.facebook.com/profile.php?id=61550665923693&sk=about" className='fb' target="_blank"
                   rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} size="2x"/>
                </a>
                <a href="https://www.instagram.com/_freecv/" className='insta' target="_blank"
                   rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="2x"/>
                </a>
            </div>
            <div className='created'>
                <p>A product by Jana Petreska, 2023</p>
            </div>

        </div>
    )
}

export default Footer
