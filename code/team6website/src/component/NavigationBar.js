import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import { 
    Navbar, Nav, NavDropdown, 
    FormControl, Form, Button,
    Container, Row, Column, Col,
} from 'react-bootstrap'

function NavigationBar() {
    return (
        <>
        <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
            <Nav.Link eventKey="login">
                Login/Sign Up
            </Nav.Link>
            </Nav.Item>
        </Nav>
        <Container>
            <Row>
                <Col></Col>
                <Col>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                </Col>
                <Col></Col>
            </Row>
        </Container>
        <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
            <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="/CarListing">Cars for Sale</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="/PartListing">Parts for Sale</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="/Contact">Contact</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="Find Us">Find Us</Nav.Link>
        </Nav.Item>
        </Nav>
      </>
    )
}

export default NavigationBar
