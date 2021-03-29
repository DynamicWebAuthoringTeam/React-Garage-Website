import React from 'react'
import {Container, Form, Navbar, Button, FormControl, Col, Row} from 'react-bootstrap'
import './component-css/SiteFooter.css';
function SiteFooter() {

    return (
        <>
            <Row className="footer-wrapper">
                    <Col sm="5" className="footer-column">
                        <Container>
                            <Form inline>
                            <h3>Newsletter signup</h3>
                                <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                                <Button type="submit">Search</Button>
                            </Form>
                        </Container>
                    </Col>
                    <Col sm="5" className="footer-column">
                        <Container>
                            TEXT
                        </Container>
                    </Col>
                </Row>
        </>
    )
}

export default SiteFooter
