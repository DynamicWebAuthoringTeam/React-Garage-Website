import React, { useState } from 'react'
import { Col, Button, Card, Form, Container, ProgressBar, Row } from 'react-bootstrap'
import './page-css/Register.css';
import { useHistory } from "react-router"

//Import the Mock database.
import { users } from '../../data/users';

function validateRegistration(
    city, county,
    address, postcode,
    password, firstName,
    secondName, newsLetter,
    agreeTerms, passwordCheck,
    email) {

    var valid = false;
    var validPassword = false;
    var validNewUser = false;

    //If no fields are empty
    if (city != null || county != null ||
        address != null || postcode != null ||
        password != 0 || firstName != null ||
        secondName != null || newsLetter != null ||
        agreeTerms != null || passwordCheck != null ||
        email != null) {

        //Check password requirements greater than 7 chars and both password field are equal
        if (password.length > 7 && password === passwordCheck) {
            console.log('password good')
            validPassword = true
        }

        //If email doesnt exist allready, we can add this user
        if (users.filter(x => x.email) == null) {
            validNewUser = true
        }

        //If all validation passed set valid to true
        if (validPassword == true && validPassword == true) {
            valid = true
        }
    }
    return valid
}

function Register() {

    let history = useHistory()

    //Hold Form State
    const [city, setCity] = useState(null);
    const [email, setEmail] = useState(null);
    const [county, setCounty] = useState(null);
    const [address, setAddress] = useState(null);
    const [postcode, setPostCode] = useState(null);
    const [password, setPassword] = useState(0);
    const [firstName, setFirstName] = useState(null);
    const [secondName, setSecondName] = useState(null);
    const [newsLetter, setNewsLetter] = useState(false);
    const [agreeTerms, setAggreeTerms] = useState(false);
    const [passwordCheck, setPasswordCheck] = useState(null);

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
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        onChange={x => { setEmail(x.target.value); }}
                                    />
                                </Form.Group>

                                <Form.Group lg as={Col} controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        onChange={x => { setPassword(x.target.value); }}
                                    />
                                </Form.Group>

                                <Form.Group lg as={Col} controlId="formGridPassword2">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        onChange={x => { setPasswordCheck(x.target.value); }}
                                    />
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
                                        <ProgressBar striped variant="danger" now={20} key={1} />
                                        <ProgressBar striped variant="warning" now={20} key={2} />
                                        <ProgressBar striped variant="success" now={60} key={3} />
                                    </ProgressBar>
                                </Col>
                            </Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridFirstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        placeholder="first name"
                                        onChange={x => { setFirstName(x.target.value); }}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridSecondName">
                                    <Form.Label>Second Name</Form.Label>
                                    <Form.Control
                                        placeholder="second name"
                                        onChange={x => { setSecondName(x.target.value); }}
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Group controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    placeholder="address"
                                    onChange={x => { setAddress(x.target.value); }}
                                />
                            </Form.Group>

                            <Form.Row>
                                <Form.Group lg as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control
                                        placeholder="city"
                                        onChange={x => { setCity(x.target.value); }}
                                    />
                                </Form.Group>

                                <Form.Group lg as={Col} controlId="formGridState">
                                    <Form.Label>County</Form.Label>
                                    <Form.Control
                                        onChange={x => { setCounty(x.target.value); }}
                                        as="select"
                                        defaultValue="pick one...">
                                        <option>Choose...</option>
                                        <option>Belfast</option>
                                        <option>London</option>
                                        <option>Paris</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group lg as={Col} controlId="formGridZip">
                                    <Form.Label>Post Code</Form.Label>
                                    <Form.Control
                                        onChange={x => { setPostCode(x.target.value); }}
                                    />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group id="formGridCheckbox">
                                <Form.Check
                                    type="checkbox"
                                    label="Check to Sign up to our news letter"
                                    onChange={x => { setNewsLetter(x.target.value); }}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Click to agree to terms and conditions"
                                    onChange={x => { setAggreeTerms(x.target.value); }}
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit"
                                onClick={e => {
                                    if (validateRegistration(city, county, address, postcode, password, firstName, secondName, newsLetter, agreeTerms, passwordCheck, email) == true) {
                                       
                                        //Create the new user
                                        var theNewUser = {
                                            city: city,
                                            email: email,
                                            county: county,
                                            address: address,
                                            postcode: postcode,
                                            password: password,
                                            firstName: firstName,
                                            secondName: secondName,
                                            newsLetter: newsLetter,
                                            agreeTerms: agreeTerms
                                        }

                                        //Add the new user the fake database at the next element
                                        users[users.length] = theNewUser;

                                        //Push to login
                                        history.push("/login")
                                    }
                                }
                                }>Submit</Button>
                        </Form>
                    </Container>
                </Card>
            </Container>
        </>
    )
}

export default Register
