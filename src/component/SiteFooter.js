import React from 'react'
import { Container, Form, Button, FormControl, Col, Row, Card } from 'react-bootstrap'
import './component-css/SiteFooter.css';
function SiteFooter() {

    return (
        <>
            <div class="footer">
                <Row>
                    <Col lg className="footer-newsletter">
                        <Container className="footer-social">
                            <Row>
                                <Col></Col>
                                <Col lg='5'>
                                    <h4>Sign up to our newsletter</h4>
                                </Col>
                                <Col></Col>
                            </Row>
                            <hr></hr>
                            <Row>
                                <Col></Col>
                                <Col lg='5'>
                                    <FormControl type="text" placeholder="your email" className=" mr-sm-2" />
                                </Col>
                                <Col lg='2'>
                                    <Button className="footer-button-newsletter" type="submit">Sign up</Button>
                                </Col>
                                <Col></Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col lg>
                        <Container className="footer-social">
                            <Row>
                                <Col></Col>
                                <Col lg='8'>
                                    <h4>Keep up to date with our recent news on Social Media</h4>
                                </Col>
                                <Col></Col>
                            </Row>
                            <hr></hr>
                            <Row>
                                <Col>
                                    <a href="https://twitter.com/home">
                                        <Card.Img height="60px" src='../../../images/twitter.png'></Card.Img>
                                    </a>
                                </Col>
                                <Col>
                                    <a href="https://www.instagram.com/">
                                        <Card.Img height="50px" src='../../../images/instagram.png'></Card.Img>
                                    </a>
                                </Col>
                                <Col>
                                    <a href="https://www.facebook.com/FacebookBusinessEMEA/">
                                        <Card.Img height="50px" src='../../../images/facebook.png'></Card.Img>
                                    </a>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <div className="footer-links">
                    <hr></hr>
                    <Container>
                        <Row>
                            <Col lg >
                                Pages
                                <ul>
                                    <il><a href="/home">Home</a></il><br></br>
                                    <il><a href="/carlisting">Car Listing</a></il><br></br>
                                    <il><a href="/partlisting">Part Listing</a></il><br></br>
                                    <il><a href="/findus">Findus</a></il><br></br>
                                    <il><a href="/login">Login</a></il><br></br>
                                    <il><a href="/register">Register</a></il><br></br>
                                </ul>
                            </Col>
                            <Col lg ="5">
                                Quick Links
                                <ul>
                                    <il><a href="https://www.facebook.com/FacebookBusinessEMEA/">Our Facebook</a></il><br></br>
                                    <il><a href="https://www.instagram.com/">Our Instagram</a></il><br></br>
                                    <il><a href="https://twitter.com/home">Our Twitter</a></il><br></br>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default SiteFooter
