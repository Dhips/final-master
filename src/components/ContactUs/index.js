import React from 'react'

import Contact from '../../images/Contact.jpg';
import './index.css';

export default function ContactUs() {
    return (
        <div>
            <h1 className='ha'>Contact Us</h1>
            <img className="pictur" src={Contact} alt="Contact" />
            <br></br>
            <h3 className='hb'>Drop us an <a href="mailto:s.dhipanraj@gmail.com" target="_blank" rel="noopener noreferrer">email</a>!</h3>
            <br></br>
        </div>
    )
}
