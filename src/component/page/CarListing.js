import React, { useState } from 'react';
import { Row, Col, Card, Button, Form, Container } from 'react-bootstrap'
import { singleCarsData } from '../../data/single-cars-data';
import './page-css/CarListing.css';
import '../component-css/CarCards.css';
import { useHistory } from "react-router"

function CarListing() {
    let history = useHistory()

    //State of variable that holds all the card parts to render
    const [filteredCars, setFilteredCars] = useState(singleCarsData);
    const [filterDisplay, setFilterDisplay] = useState(false);

    //State of user chosen filters
    const [makeFilter, setMakeFilter] = useState('');
    const [modelFilter, setModelFilter] = useState('');

    //Price Bounds
    const [lowerPrice, setLowerPrice] = useState(0);
    const [upperPrice, setUpperPrice] = useState(999999);

    //Milage Bounds
    const [lowerMiles, setLowerMiles] = useState(0);
    const [upperMiles, setUpperMiles] = useState(999999);

    //Year Bounds
    const [lowerYear, setLowerYear] = useState(1900);
    const [upperYear, setUpperYear] = useState(2030);

    //Function to filter the variable used to populate all the show cards.
    function applyFilter() {
        setFilteredCars(
            singleCarsData.filter(car =>
                !car.model.toLowerCase().indexOf(modelFilter.toLowerCase()) &&
                !car.make.toLowerCase().indexOf(makeFilter.toLowerCase()) &&
                ((Number(upperPrice) >= Number(car.price)) && (Number(car.price) >= Number(lowerPrice))) &&
                ((Number(upperMiles) >= Number(car.miles)) && (Number(car.miles) >= Number(lowerMiles))) &&
                ((Number(upperYear) >= Number(car.year)) && (Number(car.year) >= Number(lowerYear)))
            )
        )
    }

    function resetFilters() {
        setMakeFilter('')
        setModelFilter('')
        setLowerYear(1900)
        setUpperYear(2030)
        setLowerPrice(0)
        setUpperPrice(999999)
        setLowerMiles(0)
        setUpperMiles(999999)
        setFilteredCars(singleCarsData)
    }

    return (
        <>
         <Container className="carlisting-toggler-filters-container">
            <Button onClick={() => setFilterDisplay(!filterDisplay)}>{`Toggle Filters >`}</Button>
        </Container>
            { filterDisplay
                ?
                <Container className="carlisting-filters-container">
                    <Form>
                        <Row className="car-listing-row-wrapper">
                            <Col lg="2"><Form.Label>Filter Make: {makeFilter} </Form.Label></Col>
                            <Col lg="4">
                                <Form.Control
                                    placeholder="add a make filter.."
                                    onChange={item => { setMakeFilter(item.target.value); applyFilter() }}
                                />
                            </Col>
                        </Row>
                        <Row className="car-listing-row-wrapper">
                            <Col lg="2"><Form.Label>Filter Model: {modelFilter} </Form.Label></Col>
                            <Col lg="4">
                                <Form.Control
                                    placeholder="add a model filter.."
                                    onChange={item => { setModelFilter(item.target.value); applyFilter() }}
                                />
                            </Col>
                        </Row>
                    </Form>
                    <Form>
                        <Form.Group controlId="rangefilter" as={Row}>
                            <Col>
                                <Row>
                                    <Col lg="1">
                                        <Form.Label>Lower Year</Form.Label>
                                    </Col>
                                    <Col xs="3">
                                        <Form.Control value={lowerYear} />
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            type="range"
                                            value={lowerYear}
                                            onChange={e => { setLowerYear(e.target.value); applyFilter() }}
                                            min={1900} max={2030} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg="1">
                                        <Form.Label>Upper Year</Form.Label>
                                    </Col>
                                    <Col xs="3">
                                        <Form.Control value={upperYear} />
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            type="range"
                                            value={upperYear}
                                            onChange={e => { setUpperYear(e.target.value); applyFilter() }}
                                            min={1900} max={2030} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg="1">
                                        <Form.Label>Lower $</Form.Label>
                                    </Col>
                                    <Col xs="3">
                                        <Form.Control value={lowerPrice} />
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            type="range"
                                            value={lowerPrice}
                                            onChange={e => { setLowerPrice(e.target.value); applyFilter() }}
                                            min={0} max={999999} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg="1">
                                        <Form.Label>Upper $</Form.Label>
                                    </Col>
                                    <Col xs="3">
                                        <Form.Control value={upperPrice} />
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            type="range"
                                            value={upperPrice}
                                            onChange={e => { setUpperPrice(e.target.value); applyFilter() }}
                                            min={0} max={999999} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg="1">
                                        <Form.Label>Lower Miles</Form.Label>
                                    </Col>
                                    <Col xs="3">
                                        <Form.Control value={lowerMiles} />
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            type="range"
                                            value={lowerPrice}
                                            onChange={e => { setLowerMiles(e.target.value); applyFilter() }}
                                            min={0} max={999999} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg="1">
                                        <Form.Label>Upper Miles</Form.Label>
                                    </Col>
                                    <Col xs="3">
                                        <Form.Control value={upperMiles} />
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            type="range"
                                            value={upperMiles}
                                            onChange={e => { setUpperMiles(e.target.value); applyFilter() }}
                                            min={0} max={999999} />
                                    </Col>
                                </Row>
                            </Col>
                        </Form.Group>
                    </Form>
                    <Button onClick={ () => { resetFilters() }}>Reset Filters</Button>
                </Container>
                : null
            }
            <Row className="row-wrapper">
                {
                    // loop through all the cars in singleCarsData, creating a card for each Car.
                    filteredCars.map((car, key) => {
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
                                            //Button will navigation the user to the singleCar page for this car. history.push("/singlecar?id=" + car.id)
                                            <Button variant="primary" onClick={event => history.push("/singlecar?id=" + car.id )}>
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
