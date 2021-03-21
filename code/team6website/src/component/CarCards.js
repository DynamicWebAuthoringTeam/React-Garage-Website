import React, { useState } from 'react';
import { Container, Row, Col, Card, Button} from 'react-bootstrap'
import { singleCarsData } from '../data/single-cars-data';
import './component-css/CarCards.css';
function CarCards() {
    return (
        <>
            {/* TODO 
                1. need to center this row on the page  
                2. Make all image the same dimensions
            */}

            <Row className="row-wrapper">
                {
                    singleCarsData.map((car, key) => {
                        return (
                            <Col lg="4">
                                <Card key={key} className="mb-3" style={{color: "#000"}}>
                                    <Card.Img src={car.primaryImage}></Card.Img>
                                    <Card.Body>
                                        <Card.Title>{car.make} {key} {car.model}</Card.Title>
                                        <Card.Text>
                                        This is a example of react bootstrap cards
                                        </Card.Text>
                                            {
                                                <Button variant="primary" onClick={event => window.location.href="/singlecar?id=" + car.id}>
                                                    Read More
                                                </Button>
                                            }
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                        })
                }
            </Row>
        </>
    )
}

export default CarCards
