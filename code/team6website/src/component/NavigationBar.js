import React from 'react';
// import { Link } from 'react-router-dom';
import { 
    Navbar, Nav, NavDropdown, Dropdown,
    FormControl, Form, Button,
    Container, Row, Column, Col,
} from 'react-bootstrap'
// import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAdjust } from '@fortawesome/free-solid-svg-icons'

function NavigationBar() {
    return (
        <>
        <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
            <Nav.Link eventKey="theme">
            {/* <FontAwesomeIcon icon={faAdjust} /> */}
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="login">
                Login/Sign Up
            </Nav.Link>
            </Nav.Item>
        </Nav>
        <Container>
            <Row>
                <Col></Col>
                <Col xs={5}>
                    <Form inline>
                    <Dropdown inline>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Type
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Search Car</Dropdown.Item>
                        <Dropdown.Item>Search Part</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                    
                    <FormControl inline type="text" placeholder="Search" className="mr-sm-2" />
                    <Button inline variant="primary">Search</Button>
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
            <Nav.Link href="/carlisting" eventKey="/carlisting">Cars for Sale</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/partlisting" eventKey="/partlisting">Parts for Sale</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/contract"eventKey="/contract">Contact</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/findus" eventKey="findus">Find Us</Nav.Link>
        </Nav.Item>
        </Nav>
      </>
    )
}

export default NavigationBar
