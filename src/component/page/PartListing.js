import React, { useState } from 'react';
import { Row, Col, Card, Button, Form, Container } from 'react-bootstrap'
import { allPartsData } from '../../data/single-part-data';
import '../component-css/CarCards.css';
import './page-css/PartListing.css';
import Media from 'react-media';

function PartListing() {

    //State of variable that holds all the card parts to render
    const [filterdParts, setFilterParts] = useState(allPartsData);

    //State of user chosen filters
    const [nameFilter, setNameFilter] = useState('');
    const [makeFilter, setMakeFilter] = useState('');
    const [modelFilter, setModelFilter] = useState('');
    const [lowerPrice, setLowerPrice] = useState(0);
    const [upperPrice, setUpperPrice] = useState(9999);

    //Filter display toggle
    const [filterDisplay, setFilterDisplay] = useState(false);

    //Function to filter the variable used to populate all the show cards.
    function applyFilter() {
        setFilterParts(
            allPartsData.filter(part =>
                !part.name.toLowerCase().indexOf(nameFilter.toLowerCase()) &&
                !part.model.toLowerCase().indexOf(modelFilter.toLowerCase()) &&
                !part.make.toLowerCase().indexOf(makeFilter.toLowerCase()) &&
                ((Number(upperPrice) > Number(part.price)) && (Number(part.price) > Number(lowerPrice)))
            )
        )
    }

    //TODO work out how to also reset the text of the text boxes
    function resetFilters() {
        setNameFilter('')
        setMakeFilter('')
        setModelFilter('')
        setLowerPrice(0)
        setUpperPrice(9999)
        setFilterParts(allPartsData)
    }

    return (
        <div>
            <Container className="partlisting-toggler-filters-container">
                <Button onClick={() => setFilterDisplay(!filterDisplay)}>{`Toggle Filters >`}</Button>
            </Container>
            { filterDisplay
                ?
                <Container className="partlisting-filters-container">
                    <Form>
                        <Row className="part-listing-row-wrapper">
                            <Col lg="2"><Form.Label>Filter Name: {nameFilter}</Form.Label></Col>
                            <Col lg="4">
                                <Form.Control
                                    placeholder="add a name filter.."
                                    onChange={item => { setNameFilter(item.target.value); applyFilter() }}
                                />
                            </Col>
                        </Row>
                        <Row className="part-listing-row-wrapper">
                            <Col lg="2"><Form.Label>Filter Make: {makeFilter} </Form.Label></Col>
                            <Col lg="4">
                                <Form.Control
                                    placeholder="add a make filter.."
                                    onChange={item => { setMakeFilter(item.target.value); applyFilter() }}
                                />
                            </Col>
                        </Row>
                        <Row className="part-listing-row-wrapper">
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
                                            min={0} max={9999} />
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
                                            min={0} max={9999} />
                                    </Col>
                                </Row>
                            </Col>
                        </Form.Group>
                    </Form>

                    <Button onClick={
                        () => { resetFilters() }}>Reset Filters</Button>

                </Container>
                : null
            }
            <Row className="row-wrapper">
                {
                    // loop through all the cars in singleCarsData, creating a card for each Car.
                    filterdParts.map((part, key) => {
                        return (
                            <Col lg="3">
                                <Card key={key} className="mb-3" style={{ color: "#000" }}>
                                    <Card.Img src={part.primaryImage}></Card.Img>
                                    <Card.Body>
                                        <Card.Title>{part.name}</Card.Title>
                                        <Card.Text>Make: {part.make}</Card.Text>
                                        <Card.Text>Model: {part.model}</Card.Text>
                                        <Card.Text>Description: {part.description}</Card.Text>
                                        {
                                            //Button will navigation the user to the singleCar page for this car.
                                            <Button variant="primary" onClick={event => window.location.href = "/singlepart?id=" + part.id}>
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
        </div>
    );
}


export default PartListing
