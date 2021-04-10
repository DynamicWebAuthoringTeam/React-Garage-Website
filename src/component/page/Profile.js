import React, { useContext, useState } from 'react'

//Import the Mock database.
import { users } from '../../data/users';

//Import Bootstrap-react
import { Card, Container} from 'react-bootstrap'

//Import Context.
import { Context } from "../Context.js";

//Import Css
import './page-css/Profile.css';

import SiteFooter from '../SiteFooter';

function Profile() {
    const [user, setUser] = useContext(Context)

    return (
        <>
        <Container>
            <Card>
                <Container>
                <h1>Your Profile and Account Details</h1>
                <p className="profile-details">
                    Email: {user.email}
                    <br></br>
                    Password: {user.password}
                    <br></br>
                    Name: {user.firstName} {user.secondName}
                    <br></br>
                    Address: {user.address}
                    <br></br>
                    City: {user.city}
                    <br></br>
                    Post Code: {user.postCode}
                    <br></br>
                    County: {user.county}
                </p>
                </Container>
            </Card>
        </Container>
        <SiteFooter></SiteFooter>
        </>
    )
}

export default Profile
