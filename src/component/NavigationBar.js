import React from 'react';  
import Media from 'react-media';
import { 
    Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Row, Col
} from 'react-bootstrap'
import './component-css/NavigationBar.css';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { useState } from 'react';

function NavigationBar() {

    const [key, setKey] = useState('/home');

    return (
        <>
        
        <Navbar fill collapseOnSelect expand="lg" >

            {/* Required */}
            {/* Empty <div></div> is required here, as when on mobile device, Navbar.Collapse below will be aligned right, as  
                Navbar component directly above contains '2 divs':
                    1. <div></div> 
                    2.  <Navbar.Collapse>
            */}<div></div>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav variant="tabs" className="tab-color" defaultActiveKey="/" fill style={{width: "100%"}}>
                <Nav.Item>
                    <Nav.Link className="nav-link-text" eventKey="/home" as={NavLink} to="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="nav-link-text" eventKey="/carlisting" as={NavLink} to="/carlisting">Cars for Sale</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="nav-link-text" eventKey="/partlisting" as={NavLink} to="/partlisting">Parts for Sale</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="nav-link-text" eventKey="/contact" as={NavLink} to="/contact">Contact</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="nav-link-text" eventKey="/findus" as={NavLink} to="/findus">Find Us</Nav.Link>
                </Nav.Item>
                </Nav>
            </Navbar.Collapse>
            
        </Navbar>
        <Media query="(max-width: 987px)">
                    { matches =>
                            matches ? (
                                <Container fluid>
                                <Form>
                                    <FormControl fluid type="text" placeholder="Search" className=" mr-sm-2" />
                                    <Row>
                                        <Col></Col>
                                        <Col>
                                            <Button type="submit" className="collapsed-search-button">Search</Button>
                                        </Col>
                                        <Col></Col>
                                    </Row>
                                </Form>
                                </Container>
                                ) : (
                                    <div></div>
                                )
                }
                </Media>
      </>
    )
}

export default NavigationBar
