import React from 'react'
import { Row, Col, Container, Image, Table, Card } from 'react-bootstrap'
import './page-css/SingleCar.css';

function SingleCar() {
    const findCarId = "hi"
    return (
        <>
            <Row className="row-wrapper">
                <Col sm={9} className="main-column">
                    <Container className="main-column-container">
                        {/* Primary Car Image */}
                        <Image className='main-image' src="https://picsum.photos/200/50" fluid rounded  />
                        
                        {/* Key Details */}
                        <Card className="key-details-wrapper">
                            <Card.Header>Key Details</Card.Header>
                                <Card.Body>
                                    <Row className="key-details-row">
                                        <Col>
                                            <Card>
                                                <Card.Header as="h5">Make</Card.Header>
                                                <Card.Body>  
                                                    <Card.Title>{findCarId}</Card.Title>
                                                    <Card.Text>
                                                    With supporting text below as a natural lead-in to additional content.
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card>
                                                <Card.Header as="h5">Model</Card.Header>
                                                <Card.Body>
                                                    <Card.Title>Special title treatment</Card.Title>
                                                    <Card.Text>
                                                    With supporting text below as a natural lead-in to additional content.
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <Row className="key-details-row">
                                        <Col>
                                        <Card>
                                                <Card.Header as="h5">Miles</Card.Header>
                                                <Card.Body>
                                                    <Card.Title>Special title treatment</Card.Title>
                                                    <Card.Text>
                                                    With supporting text below as a natural lead-in to additional content.
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                        <Card>
                                                <Card.Header as="h5">Price</Card.Header>
                                                <Card.Body>
                                                    <Card.Title>$1000</Card.Title>
                                                    <Card.Text>
                                                        The Buyer minium asking.
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <blockquote className="blockquote mb-0">
                                    <footer className="blockquote-footer">
                                        See full car spec below for more details.
                                    </footer>
                                    </blockquote>
                                </Card.Body>
                            </Card>
                        
                        {/* Full Car Spec */}
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                </tr>
                                <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                </tr>
                                <tr>
                                <td>3</td>
                                <td colSpan="2">Larry the Bird</td>
                                <td>@twitter</td>
                                </tr>
                            </tbody>
                            </Table>
                    </Container>
                </Col>
                <Col sm={3} className="sidebar-column">
                    <Container>
                        {/* other Car Image */}
                        <p>hey</p>
                        {/* Seller Contact Info */}
                        {/* Google Api Maps Location */}
                    </Container>
                </Col>
            </Row>
        </>
    )
}

export default SingleCar
