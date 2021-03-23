import React from 'react';
import {Row, Col, Card, Button } from 'react-bootstrap'
import { singleCarsData } from '../../data/single-cars-data';
import '../component-css/CarCards.css';

function CarListing() {
    return (
        <>
            <Row className="row-wrapper">
                {
                    // loop through all the cars in singleCarsData, creating a card for each Car.
                    singleCarsData.map((car, key) => {
                        return (
                            <Col lg="4">
                                <Card key={key} className="mb-3" style={{ color: "#000" }}>
                                    <Card.Img src={car.primaryImage}></Card.Img>
                                    <Card.Body>
                                        <Card.Title>{car.make} - {car.model}</Card.Title>
                                        <Card.Text>
                                            Year: {car.year}
                                        </Card.Text>
                                        {
                                            //Button will navigation the user to the singleCar page for this car.
                                            <Button variant="primary" onClick={event => window.location.href = "/singlecar?id=" + car.id}>
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

export default CarListing
