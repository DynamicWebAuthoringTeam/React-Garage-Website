import React from 'react';  
import { 
    Navbar, Nav, NavDropdown
} from 'react-bootstrap'

function NavigationBar() {
    return (
        <>
        <Navbar fill collapseOnSelect expand="lg" >

            {/* Required */}
            {/* Empty div is required here, as when on mobile device, Navbar.Collapse below will be aligned right, as  
                Navbar component directly above contains '2 divs':
                    1. <div></div> 
                    2.  <Navbar.Collapse>
            */}
            <div>

            </div>
            {/* Required */}
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav variant="tabs" defaultActiveKey="/home" fill style={{width: "100%"}}>
                <Nav.Item>
                    <Nav.Link href="/home" eventKey="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/carlisting" eventKey="/carlisting">Cars for Sale</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/partlisting" eventKey="/partlisting">Parts for Sale</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/contact"eventKey="/contact">Contact</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/findus" eventKey="findus">Find Us</Nav.Link>
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
      </>
    )
}

export default NavigationBar
