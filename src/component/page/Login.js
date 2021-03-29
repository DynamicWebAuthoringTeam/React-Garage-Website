import React, { useContext } from 'react'
import { Col, Button, Card, Form, Container,  } from 'react-bootstrap'
import { users } from '../../data/users';
import { Context } from '../Context';

function Login() {

    //Mocking find user from a database.
    function findUser(email) {
        var user = users.filter(user => user.email === email)
        console.log(user)
        return user[0]
    }

    //Mocking check password against a database.
    function checkPassword(foundUser, givenPassword) {
        if(foundUser != null){
            var boolIsPassCorrect = foundUser.password === givenPassword;

            //TODO remove logging
            console.log(foundUser.password)
            console.log(givenPassword)
            console.log(boolIsPassCorrect)
        } else {
            return(false)
        }
    }
    //Mocking user authenicate and account info retrival.
    function authenicate(email, givenPassword){
        
        return (checkPassword(findUser(email), givenPassword))
    }


    return (
        <>
            <Container>
                <Card class="login-card">
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                        </Form.Row>
                        <Form.Row>
                        <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Form.Row>
                        <Button onClick={event => authenicate('michael@email.com','Password123!')}>Login</Button>
                    </Form>
                </Card>
            </Container>
        </>
    )
}

export default Login
