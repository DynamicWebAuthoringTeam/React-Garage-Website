import React, { useState } from 'react'
import { Col, Button, Card, Form, Container, ProgressBar, Row, Alert } from 'react-bootstrap'
import './page-css/Register.css';
import { useHistory } from "react-router"

//Import the Mock database.
import { users } from '../../data/users';

//A Function that validates the users input account deletes. returning true if valid.
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
    if (city != null || county != null || address != null || postcode != null ||
        password != 0 || firstName != null || secondName != null || newsLetter != null ||
        agreeTerms != null || passwordCheck != null || email != null) {

        //Check password requirements greater than 7 chars and both password field are equal
        if (password.length > 7 && password === passwordCheck) {
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

    //Variables for holding state for each form control.
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

    //Validation Message display toggle
    const [displayValidationErrors, setDisplayValidationErrors] = useState(false);

    // A Class used to render the Passwords Strength, based on the number of characters the user has input.
    class PasswordStrength extends React.Component {
        render() {
            if (password.length < 1) {
                return (
                    <ProgressBar>
                        <ProgressBar striped variant="danger" now={1} />
                    </ProgressBar>
                );
            }
            else if (password.length < 2) {
                return (
                    <ProgressBar>
                        <ProgressBar striped variant="danger" now={password.length * 10} />
                    </ProgressBar>
                );
            }
            else if (password.length < 4) {
                return (
                    <ProgressBar>
                        <ProgressBar striped variant="danger" now={password.length * 10} />
                    </ProgressBar>
                );
            }
            else if (password.length < 8) {
                return (
                    <ProgressBar>
                        <ProgressBar striped variant="danger" now={40} />
                        <ProgressBar striped variant="warning" now={(password.length * 10) - 40} />
                    </ProgressBar>
                );
            }
            else if (password.length >= 8) {
                return (
                    <ProgressBar>
                        <ProgressBar striped variant="success" now={100} />
                    </ProgressBar>
                );
            } else {
                return (
                    <ProgressBar >
                        <ProgressBar striped variant="danger" now={1} />
                    </ProgressBar>);
            }
        }
    }

    // A class used to create a Validation Alert, and displayed using a toggle stored in a React State const
    class ValidationErrors extends React.Component {
        render() {
            if (displayValidationErrors) {
                return (
                    <Container>
                        <Alert variant="danger" onClose={() => setDisplayValidationErrors(false)} dismissible>
                            <Alert.Heading>Sorry! Validation Error </Alert.Heading>
                            <p>
                                The following fields are invalid.
                            </p>
                        </Alert>
                    </Container>
                );
            }
            return (<div></div>);
        }
    }

    return (
        <>
            <Container>

                <Card className="register-card-wrapper">

                    {/* ValidationErrors Alert rendered near the top of the page  */}
                    <ValidationErrors></ValidationErrors>

                    <Container className="register-inner-container-wrapper">
                        <h2>Registration Page</h2>
                        <br></br>
                        {/* 
                            Within Tag <Form></Form>
                            Adapted from ...
                            Resource Reference: https://react-bootstrap.netlify.app/components/forms/#forms-layout-form-row

                            This Form will take all the input of the user information such as their email and passwords.

                        */}
                        <Form id="register-form">
                            <Form.Row>

                                {/* email input box */}
                                <Form.Group lg as={Col} controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        onChange={x => { setEmail(x.target.value); }}
                                    />
                                </Form.Group>

                                {/* password input box */}
                                <Form.Group lg as={Col} controlId="formPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        onChange={x => { setPassword(x.target.value); }}
                                    />
                                </Form.Group>

                                {/* password check input box */}
                                <Form.Group lg as={Col} controlId="formPasswordCheck">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Confirm Password"
                                        onChange={x => { setPasswordCheck(x.target.value); }}
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Row>

                                {/* Password Strength Component */}
                                <Col lg="2">
                                    <h6>Password Strength: </h6>
                                </Col>
                                <Col>
                                    {/* ProgressBar
                                        Reference: https://react-bootstrap.netlify.app/components/progress/#progress-stacked
                                    */}
                                    <PasswordStrength />
                                </Col>
                            </Row>
                            <Form.Row>
                                {/* First Name input box */}
                                <Form.Group as={Col} controlId="formFirstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        placeholder="first name"
                                        onChange={x => { setFirstName(x.target.value); }}
                                    />
                                </Form.Group>

                                {/* Second Name input box */}
                                <Form.Group as={Col} controlId="formSecondName">
                                    <Form.Label>Second Name</Form.Label>
                                    <Form.Control
                                        placeholder="second name"
                                        onChange={x => { setSecondName(x.target.value); }}
                                    />
                                </Form.Group>
                            </Form.Row>

                            {/* Address Name input box */}
                            <Form.Group controlId="formAddress">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    placeholder="address"
                                    onChange={x => { setAddress(x.target.value); }}
                                />
                            </Form.Group>

                            {/* City input box */}
                            <Form.Row>
                                <Form.Group lg as={Col} controlId="formCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control
                                        placeholder="city"
                                        onChange={x => { setCity(x.target.value); }}
                                    />
                                </Form.Group>

                                {/* County input box */}
                                <Form.Group lg as={Col} controlId="formState">
                                    <Form.Label>County</Form.Label>
                                    <Form.Control
                                        onChange={x => { setCounty(x.target.value); }}
                                        as="select"
                                        defaultValue="pick one...">
                                        <option>Choose...</option>
                                        <option>Antrim</option>
                                        <option>Down</option>
                                    </Form.Control>
                                </Form.Group>

                                {/* Post Code input box */}
                                <Form.Group lg as={Col} controlId="formGridZip">
                                    <Form.Label>Post Code</Form.Label>
                                    <Form.Control
                                        onChange={x => { setPostCode(x.target.value); }}
                                    />
                                </Form.Group>
                            </Form.Row>

                            {/* newsletter and terms and conditions input boxes */}
                            <Form.Group>
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

                            {/* A button to submit the account registration */}
                            {/* if valid will navigate the user to the login page */}
                            <Button variant="primary" type="submit"
                                onClick={e => {
                                    if (validateRegistration(
                                        city, county, address, postcode, password,
                                        firstName, secondName, newsLetter, agreeTerms,
                                        passwordCheck, email) == true) {

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

                                        //Add the new user the Mock database at the next element
                                        users[users.length] = theNewUser;

                                        //Push to login if the account was valid.
                                        history.push("/login")
                                    }
                                }}>Submit</Button>
                        </Form>
                    </Container>
                </Card>
            </Container>
        </>
    )
}

export default Register
