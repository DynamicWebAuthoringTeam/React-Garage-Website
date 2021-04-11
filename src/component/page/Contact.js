import React from 'react'
import { Col, Container, Form, Button } from 'react-bootstrap';
import './page-css/Contact.css';


function Contact() {
    return (
        <>
            <div className="contact-text">
                <h1>Contact Us</h1>
                <p>Please feel free to contact us with any queries or issues, or you can leave a message bellow and someone from our team will reply.</p>
            </div>
            <div className="contact-main">
                <div className="contact-info">
                    <i class=""></i>
                    <p>Address: 10 Mc Clure St, Belfast BT7 2FB</p>
                    <p>Phone: 0044 (0)28 9901 6210</p>
                    <p>Email: info@speedfixsales.com</p>
                </div>

                <div classname="contact-form"> 
                <Form className="Cform">
                    <Form.Row>
                        <Col>
                            <Form.Control type="name" placeholder="Name" />
                        </Col>
                        <Col>
                            <Form.Control typer="Email" placeholder="Email Address" />  
                        </Col>
                    </Form.Row>    
                    <Form.Row>
                        <Form.Control as="textarea" rows={3} placeholder="Message" />
                         
                    </Form.Row>
                    <Button as="input" type="submit" value="Submit" />  
                </Form>                                                                                                                                                           
                </div>
            </div>
        </>
             
        
    )
}

export default Contact
