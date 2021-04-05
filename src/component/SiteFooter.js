import React from 'react'
import {Container, Form, Button, FormControl, Col, Row} from 'react-bootstrap'
import './component-css/SiteFooter.css';
function SiteFooter() {

    return (
        <>
            <Row className="footer-wrapper">
                    <Col sm="5" className="footer-column">
                        <Container>
                            <Form inline>
                            <h3>Newsletter signup</h3>
                                <FormControl type="text" placeholder="Search" />
                                <Button type="submit">Search</Button>
                            </Form>
                        </Container>
                    </Col>
                    <Col sm="5" className="footer-column">
                        hi
                    </Col>
                </Row>
        </>
    )
}

export default SiteFooter
