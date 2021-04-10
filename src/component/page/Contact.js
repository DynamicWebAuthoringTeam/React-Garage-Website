import React from 'react'
import { Container } from 'react-bootstrap';
import './page-css/Contact.css';

function Contact() {
    return (
        <div className="contact">
            <p>Contact Me</p>
            
                <div className ="contact-form">
                    <div className="first-name">
                        
                        <input type="text" id="fname" name="firstname" placeholder="Name" />
                        <input type="email" id="email" name="email" placeholder="E-mail" />
                        
                    </div>
                    <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                
                    <input type="submit" value="Submit" />
                </div>
            
        </div>
    )
}

export default Contact
