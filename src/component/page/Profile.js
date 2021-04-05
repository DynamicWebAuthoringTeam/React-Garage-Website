import React, { useContext, useState } from 'react'
//Import the Mock database.
import { users } from '../../data/users';

//Import Bootstrap-react
import { Col, Button, Card, Form, Container, Alert} from 'react-bootstrap'

//Import Context.
import { Context } from "../Context.js";

function Profile() {
    const [user, setUser] = useContext(Context)

    return (
        <Container>
            <Card>
                <h3>Your Profile</h3>
                <p>
                    {user.email}
                    <br></br>
                    {user.password}
                    <br></br>
                    {user.email}
                    <br></br>
                    {user.firstName}
                    <br></br>
                    {user.secondName}
                    <br></br>
                    {user.address}
                    <br></br>
                    {user.city}
                    <br></br>
                    {user.postCode}
                    <br></br>
                    {user.county}
                </p>
            </Card>
        </Container>
    )
}

export default Profile
