// React, Bootstrap Imports
import React from 'react';
import { Row, Col, Card, Button} from 'react-bootstrap'

//Import Cars data variable
import { singleCarsData } from '../data/single-cars-data';

// Page specfic CSS Import
import './component-css/CarCards.css';

function CarCards() {
    return (
        <>
            <Row className="row-wrapper">
                {
                    singleCarsData.map((car, key) => {
                        return (
                            <Col lg="4">
                                <Card key={key} className="mb-3" style={{color: "#000"}}>
                                    <Card.Img src={car.primaryImage}></Card.Img>
                                    <Card.Body>
                                        <Card.Title>{car.make} - {car.model}</Card.Title>
                                        <Card.Text>
                                            Year: {car.year}
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
