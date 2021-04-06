//React Imports
import React, { useContext, useState } from 'react'
import { Col, Button, Card, Form, Container, Alert } from 'react-bootstrap'

//Import Routing Classes
import { NavLink } from 'react-router-dom';
import { useHistory } from "react-router"

//Import the Mock database.
import { users } from '../../data/users';

//Import Context.
import { Context } from "../Context.js";

//Import CSS
import './page-css/Login.css';

function Login() {
    //History allows for navigation
    let history = useHistory()

    //create user state from Context
    const [user, setUser] = useContext(Context);

    // State Variables holding users inputs
    const [inputEmail, setInputEmail] = useState(null);
    const [inputPassword, setInputPassword] = useState(null);
    const [displayInvalidLogin, setDisplayInvalidLogin] = useState(false);

    //Mocking find user from a database.
    function findUser(email) {
        const user = users.filter(user => user.email === email)
        return user[0]
    }

    //Mocking check password against a database.
    function checkPassword(user, givenPassword) {
        return (user != null) && (user.password === givenPassword)
    }

    //Mocking user authenicate and account info retrival.
    function authenicate(email, givenPassword) {
        const optionFoundUser = findUser(email)
        const loginSuccess = checkPassword(optionFoundUser, givenPassword)

        // If the login is successful set the User Context to the selected User
        if (loginSuccess) {
            setDisplayInvalidLogin(false)
            setUser(optionFoundUser)
            return loginSuccess
        } else {
            // If the login failed set the display of the InvalidLogin message so that it is rendered.
            setDisplayInvalidLogin(true)
            return loginSuccess
        }
    }

    /**
     * Class AlertInvalidLogin
     * Renders an invalid input alert if the login is invalid.
     * Resource Reference: https://react-bootstrap.netlify.app/components/alerts/#dismissing
     */
    class AlertInvalidLogin extends React.Component {
        render() {
            if (displayInvalidLogin) {
                return (
                    <Container>
                        {/* dismissible here allows the user to close the warning message  */}
                        <Alert variant="danger" onClose={
                            () => setDisplayInvalidLogin(false)
                        } dismissible
                        >
                            <Alert.Heading>Sorry! Invalid Login Credentials</Alert.Heading>
                            <p>
                                Please try again, or register here if you do not have an account.
                            </p>

                            {/* An Addition Prompt and link for the user to create an account if that havnt not. */}
                            <Button
                                variant="danger"
                                onClick={event => { history.push("/register") }}>Registration</Button>
                        </Alert>
                    </Container>
                );
            }
            // If no warning is required render an empty <div></div>
            return (<div></div>);
        }
    }

    return (
        <>
            <Container className="login-outer-container">

                {/* AlertInvalidLogin an alert to inform the user if there login was invalid */}
                <AlertInvalidLogin></AlertInvalidLogin>

                <Container>
                    <h1>Login</h1>
                    <Card className="login-card-wrapper">
                        <Container className="login-inner-container-wrapper">
                            <Form>

                                {/* Form.Row holding the form control for the users email input */}
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter email"
                                            onChange={e => { setInputEmail(e.target.value) }}
                                        />
                                    </Form.Group>
                                </Form.Row>

                                {/* Form.Row holding the form control for the users password input */}
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            onChange={e => { setInputPassword(e.target.value) }}
                                        />
                                    </Form.Group>
                                </Form.Row>
                                {/* A Link to the registration page for users who do not yet have an Account */}
                                <Form.Label className="login-dont-have-account" as={NavLink} to='/register'><h6>Dont have an Account? Click here to register.</h6></Form.Label>
                                
                                {/* A Submitt Button that calls authenicate, that determines if the login was valid or not. */}
                                <Button
                                    onClick={event => {
                                        if (authenicate(inputEmail, inputPassword)) {
                                            
                                            //If login was valid, push the user to the home page.
                                            history.push("/home")
                                        }
                                    }}>Login</Button>
                            </Form>
                        </Container>
                    </Card>
                </Container>
            </Container>
        </>
    )
}

export default Login
