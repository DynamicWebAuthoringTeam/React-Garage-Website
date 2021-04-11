import React from 'react'
import { Col, Container, Form, Button, Card } from 'react-bootstrap';
import './page-css/Contact.css';


function Contact() {
    return (
        <>
            <Card className="Contact-page">
                <Card.Body style={{textAlign: 'center'}}>
                <Card.Title>Contact Us</Card.Title>
                <Card.Text style={{textAlign: 'center' }}>
                    Please feel free to contact us with any queries or issues, or you can leave a message bellow and someone from our team will reply.<p></p>
                        <p>Address: 10 Mc Clure St, Belfast BT7 2FB</p>
                        <p>Phone: 0044 (0)28 9901 6210</p>
                        <p>Email: info@speedfixsales.com</p>
                    </Card.Text>
                    <Form className="Cform" style={{padding: '3px'}}>
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
             </Card.Body>
            </Card>    
        </>
                   
    )
}

export default Contact
