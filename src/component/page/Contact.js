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
                        <Form.Row className="row">
                            <Col>
                                <Form.Control id="nameInput" type="name" placeholder="Name" />
                            </Col>
                            <Col>
                                <Form.Control id="emailInput" typer="Email" placeholder="Email Address" />  
                            </Col>
                        </Form.Row>    
                        <Form.Row className="row">
                            <Form.Control id="textInput" as="textarea" rows={3} placeholder="Message" />
                        </Form.Row>
                            <Button
                                    onClick={event => {
                                        document.getElementById("nameInput").value = ''
                                        document.getElementById("emailInput").value = ''
                                        document.getElementById("textInput").value = ''
                                        alert("Thank you for contacting us! \n We aim to get back to you within 3 working days.");
                                    }}>Submit</Button>  
                    </Form> 
             </Card.Body>
            </Card>    
        </>
                   
    )
}

export default Contact
