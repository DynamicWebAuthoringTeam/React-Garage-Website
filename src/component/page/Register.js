import React, { useState } from 'react'
import { Col, Button, Card, Form, Container, ProgressBar, Row, Alert } from 'react-bootstrap'
import './page-css/Register.css';
import { useHistory } from "react-router"

//Import the Mock database.
import { users } from '../../data/users';

function validateEmail(email) {
    //Regex Taken from Stackoverflow
    //Reference: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailRegex.test(String(email).toLowerCase())) {
        return true;
    } else {
        return false;
    }
}

function validateName(name) {
    var valid = false;

    if (name != null && typeof name === 'string') {
        valid = true;
    }

    return valid;
}

function validateCity(city) {
    var valid = false;

    if (city != null && typeof city === 'string') {
        valid = true;
    }

    return valid;
}

function validateCounty(county) {
    var valid = false;

    if (county != null && typeof county === 'string') {
        valid = true;
    }

    return valid;
}

function validateAddress(address) {
    var valid = false;

    if (address != null && typeof address === 'string') {
        valid = true;
    }

    return valid;
}

function validatePostcode(postcode) {
    var valid = false;

    // Regex Taken from Wikipedia, for Uk post code, orginally supplied by gov.uk
    // Reference https://en.wikipedia.org/wiki/Postcodes_in_the_United_Kingdom#Validation
    const postCodeRegex = /^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})$/;

    if (postCodeRegex.test(String(postcode).toLowerCase())) {
        valid = true;
    }

    return valid;
}

function validatePassword(password, passwordCheck) {
    var valid = false;

    if (password != null && password.length > 7 && password === passwordCheck) {
        valid = true;
    }

    return valid;
}

//Checks all Validation criteria and returns true if all is valid. 
function validateRegistration(email, password, passwordCheck, city, county, address, postcode, firstName, secondName) {
    return (
        validateEmail(email) &&
        validatePassword(password, passwordCheck) &&
        validateCity(city) &&
        validateCounty(county) &&
        validateAddress(address) &&
        validatePostcode(postcode) &&
        validateName(firstName) &&
        validateName(secondName)
    )
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

            //Holds Validation errors
            var validationErrors = []

            if(!validateEmail(email)){
                validationErrors.push("Email - must be a standard email format example@google.com...");
            }

            if(!validatePassword(password, passwordCheck)){
                validationErrors.push("Password - your passwords do not match or are too short...");
            }

            if(!validateCity(email)){
                validationErrors.push("City - Must be a word...");
            }

            if(!validateCounty(email)){
                validationErrors.push("County - Must be a word...");
            }

            if(!validateAddress(address)){
                validationErrors.push("Address - Must be a word or words...");
            }

            if(!validatePostcode(postcode)){
                validationErrors.push("Postcode - Must be a standard UK postcode address...");
            }

            if(!validateName(firstName)){
                validationErrors.push("First Name -  Must be a word...");
            }

            if(!validateName(secondName)){
                validationErrors.push("Second Name -  Must be a word...");
            }

            //If there are any validation errors a message will be displayed showing the issues.
            if (validationErrors.length != 0) {
                return (
                    <Container>
                        <Alert variant="danger" className="validation-errors-alert">
                            <Alert.Heading>Please fix the following Validation Errors..</Alert.Heading>
                            {
                                validationErrors.map((error, key) => {
                                    return (
                                        <div>{error}</div>
                                    );
                                })
                            }
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


                            <Form.Row>
                                {/* City input box */}
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
                                    if (validateRegistration(email, password, passwordCheck, city, county, address, postcode, firstName, secondName)) {

                                        //user is valid so assemble new user variable
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

                                        //Add the new user to the Mock database variable at the next element in the array
                                        //This will allow the user to login from the login page.
                                        users[users.length] = theNewUser;

                                        //Push to login if the account was valid.
                                        history.push("/registersuccess")
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
