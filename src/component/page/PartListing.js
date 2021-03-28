import React, { useState, RangeSlider } from 'react';
import { Row, Col, Card, Button, DropdownButton, Dropdown, Form, Container } from 'react-bootstrap'
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
    const [value, setValue] = React.useState(0);
    const [value2, setValue2] = React.useState(9999);

    //Filter display toggle
    const [filterDisplay, setFilterDisplay] = useState(true);

    //Function to filter the variable used to populate all the show cards.
    function applyFilter() {

        setFilterParts(
            allPartsData.filter(part =>
                !part.name.toLowerCase().indexOf(nameFilter.toLowerCase()) &&
                !part.model.toLowerCase().indexOf(modelFilter.toLowerCase()) &&
                !part.make.toLowerCase().indexOf(makeFilter.toLowerCase())
            )
        )
    }

    // function filterShowToggle() {
    //     var x = document.getElementById("filters-div");
    //     if (x.style.display === "none") {
    //       x.style.display = "block";
    //     } else {
    //       x.style.display = "none";
    //     }
    //   }

    //TODO work out how to also reset the text of the text boxes
    function resetFilters() {
        setNameFilter('')
        setMakeFilter('')
        setModelFilter('')
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
                            <Col xs="2"><Form.Label>Filter Name: {nameFilter}</Form.Label></Col>
                            <Col >
                                <Form.Control
                                    placeholder="add a name filter.."
                                    onChange={e => { setNameFilter(e.target.value); applyFilter() }}
                                />
                            </Col>
                        </Row>
                        <Row className="part-listing-row-wrapper">
                            <Col xs="2"><Form.Label>Filter Make: {makeFilter} </Form.Label></Col>
                            <Col>
                                <Form.Control
                                    placeholder="add a make filter.."
                                    onChange={e => { setMakeFilter(e.target.value); applyFilter() }}
                                />
                            </Col>
                        </Row>
                        <Row className="part-listing-row-wrapper">
                            <Col xs="2" ><Form.Label>Filter Model: {modelFilter} </Form.Label></Col>
                            <Col>
                                <Form.Control
                                    placeholder="add a model filter.."
                                    onChange={e => { setModelFilter(e.target.value); applyFilter() }}
                                />
                            </Col>
                        </Row>
                    </Form>
                    <Form>
                        <Form.Group controlId="rangefilter" as={Row}>
                            <Col>
                                <Row>
                                    <Col xs="1">
                                        <Form.Label>Lower $</Form.Label>
                                    </Col>
                                    <Col xs="1">
                                        <Form.Control value={value} />
                                    </Col>
                                    <Col>
                                        <Form.Control type="range" value={value} onChange={e => setValue(e.target.value)} min={0} max={9999} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="1">
                                        <Form.Label>Upper $</Form.Label>
                                    </Col>
                                    <Col xs="1">
                                        <Form.Control value={value2} />
                                    </Col>
                                    <Col>
                                        <Form.Control type="range" value={value2} onChange={e => setValue2(e.target.value)} min={0} max={9999} />
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
