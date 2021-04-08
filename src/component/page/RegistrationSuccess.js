import React from 'react'
import { Button, Card, Container, Alert } from 'react-bootstrap'
import { useHistory } from "react-router"
import './page-css/RegistrationSuccess.css';

// This page will inform the user there account creation was succesful
function RegistrationSuccess() {
    let history = useHistory()

    return (
        <Container>
                <Container className="register-success-container-wrapper">
                    <Alert variant="success">
                        <Alert.Heading>Thankyou, You Account has been created</Alert.Heading>
                        <p>
                            You can now click the button below to go to the login page.
                        </p>

                        {/* Navigation button for the user to go to the login page */}
                        <Button
                            variant="success"
                            onClick={event => { history.push("/login") }}>To Login...</Button>
                    </Alert>
                </Container>
        </Container>
    )
}

export default RegistrationSuccess
