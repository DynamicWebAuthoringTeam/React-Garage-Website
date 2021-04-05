//React Imports
import React, { useContext, useState } from 'react'
import { Col, Button, Card, Form, Container, Alert} from 'react-bootstrap'
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

    console.log(users)

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

        if (loginSuccess) {
            setDisplayInvalidLogin(false)
            setUser(optionFoundUser)
            return loginSuccess
        } else {
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
                        <Alert variant="danger" onClose={
                            () => setDisplayInvalidLogin(false)
                        } dismissible
                        >
                            <Alert.Heading>Sorry! Invalid Login Credentials</Alert.Heading>
                            <p>
                                Please try again, or register here if you do not have an account.
                            </p>
                            <Button
                                variant="danger"
                                onClick={event => { history.push("/register") }}>Registration</Button>
                        </Alert>
                    </Container>
                );
            }
            return (<div></div>);
        }
    }

    return (
        <>
            <Container className="login-outer-container">
                <AlertInvalidLogin></AlertInvalidLogin>
                <Container>
                    <h1>Login</h1>
                    <Card className="login-card-wrapper">
                        <Container className="login-inner-container-wrapper">
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter email"
                                            onChange={e => { setInputEmail(e.target.value) }}
                                        />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            onChange={e => { setInputPassword(e.target.value) }}
                                        />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Label className="login-dont-have-account" as={NavLink} to='/register'><h6>Dont have an Account? Click here to register.</h6></Form.Label>
                                <Button
                                    onClick={event => {
                                        if (authenicate(inputEmail, inputPassword)) {
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
