import React, {useState} from 'react'
import { Col, Button, Card, Form, Container, ProgressBar, Row } from 'react-bootstrap'
import './page-css/Register.css';

//Import the Mock database.
import { users } from '../../data/users';

function submitRegistration(newUser){
    users[users.length] = newUser;
    console.log(users)
}

function validateRegistration(){

}

function Register() {

    //Hold Form State
    const [city, setCity]                   = useState(null);
    const [country, setCounty]              = useState(null);
    const [address, setAddress]             = useState(null);
    const [postcode, setPostCode]           = useState(null);
    const [password, setPassword]           = useState(null);
    const [firstName, setFirstName]         = useState(null);
    const [secondName, setSecondName]       = useState(null);
    const [newsLetter, setNewsLetter]       = useState(null);
    const [agreeTerms, setAggreeTerms]      = useState(null);
    const [passwordCheck, setPasswordCheck] = useState(null);

    var fakeUser = {
        email: "test.com",
        password: "Password123!",
        firstName : "Test",
        secondName : "Test",
        address: "123 fake street",
        city : "Belfast",
        postCode: "bt123 abc",
        county: "antrim"
    }


    return (
        <>
            <Container>
                <Card className="register-card-wrapper">
                    <Container className="register-inner-container-wrapper">
                    <h2>Registration Page</h2>
                        <br></br>
                        {/* 
                            Within Tag <Form></Form>
                            Adapted from ...
                            Resource Reference: https://react-bootstrap.netlify.app/components/forms/#forms-layout-form-row
                        */}
                        <Form id="register-form">
                            <Form.Row>
                                <Form.Group lg as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group lg as={Col} controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>

                                <Form.Group lg as={Col} controlId="formGridPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                            </Form.Row>
                            <Row>
                                <Col lg="2">
                                    <h6>Password Strength: </h6>
                                </Col>
                                <Col>
                                {/* Tag ProgressBar
                                    Reference: https://react-bootstrap.netlify.app/components/progress/#progress-stacked
                                */}
                                <ProgressBar>
                                        <ProgressBar striped variant="danger"  now={20} key={1} />
                                        <ProgressBar striped variant="warning" now={20} key={2} />
                                        <ProgressBar striped variant="success" now={60} key={3} />
                                </ProgressBar>
                                </Col>
                            </Row>
                            <Form.Group controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="address" />
                            </Form.Group>

                            <Form.Row>
                                <Form.Group lg as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control />
                                </Form.Group>

                                <Form.Group lg as={Col} controlId="formGridState">
                                    <Form.Label>County</Form.Label>
                                    <Form.Control as="select" defaultValue="pick one...">
                                        <option>Choose...</option>
                                        <option>Belfast</option>
                                        <option>London</option>
                                        <option>Paris</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group lg as={Col} controlId="formGridZip">
                                    <Form.Label>Post Code</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Check to Sign up to our news letter" />
                                <Form.Check type="checkbox" label="Click to agree to terms and conditions" />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={submitRegistration(fakeUser)}>Submit</Button>
                        </Form>
                    </Container>
                </Card>
            </Container>
        </>
    )
}

export default Register
