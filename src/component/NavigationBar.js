import React from 'react';  
import Media from 'react-media';
import { 
    Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Row, Col
} from 'react-bootstrap'
import './component-css/NavigationBar.css';

function NavigationBar() {
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
                <Nav variant="tabs" className="tab-color" defaultActiveKey="/#/" fill style={{width: "100%"}}>
                <Nav.Item>
                    <Nav.Link className="nav-link-text" href="/#/" eventKey="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="nav-link-text" href="/#/carlisting" eventKey="/carlisting">Cars for Sale</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="nav-link-text" href="/#/partlisting" eventKey="/partlisting">Parts for Sale</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="nav-link-text" href="/#/contact"eventKey="/contact">Contact</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="nav-link-text" href="/#//findus" eventKey="findus">Find Us</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <NavDropdown title="Misc" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
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
