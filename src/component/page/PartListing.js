
import React, { useState} from 'react';
import {Row, Col, Card, Button, DropdownButton, Dropdown, Form } from 'react-bootstrap'
import { allPartsData } from '../../data/single-part-data';
import '../component-css/CarCards.css';
import Media from 'react-media';

 function PartListing() {

    //State Variables
    const [filterdParts, setFilterParts] = useState(allPartsData);
    const [count, setCount] = useState(0);
    const [inputFilter, setInputFilter] = useState({
        id: 0,
        make: 0,
        model: 0,
        name: 0
    });


    return (
        <div>
            <Form>
            <Form.Row>
                <Col xs={7}>
                    <Form.Control placeholder="Make" />
                </Col>
                <Col>
                    <Form.Control placeholder="Model" />
                </Col>
                <Col>
                    <Form.Control placeholder="Name" />
                </Col>
            </Form.Row>
            </Form>
            <Form>
            <Form.Group controlId="formBasicRange">
                <Form.Label>Price $</Form.Label>
                <Form.Control type="range" />
            </Form.Group>
            </Form>
            <p> Current filter {inputFilter.make} times </p>
            <DropdownButton id="dropdown-basic-button" title="Select Filter">
                <Dropdown.Item onClick={ () => {setInputFilter('id')}}>Id</Dropdown.Item>
                <Dropdown.Item onClick={ () => {setInputFilter('make')}}>Make</Dropdown.Item>
                <Dropdown.Item onClick={ () => {setInputFilter('model')}}>Model</Dropdown.Item>
            </DropdownButton>
        <p> You clicked {count} times </p>
        <button onClick={ () => {
            setFilterParts(
                allPartsData.filter(part =>
                    !part.make.indexOf("Ford")
                )
            )
            }
        }> string filter me 1
        </button>
        

        <button onClick={() => {
            setFilterParts(allPartsData.filter(part => Number(part.id) === count))
            setCount(count + 1)
        }
            }>
            Click me 2
        </button>
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
                                        <Card.Text>
                                            Model Number: {part.modelNumber} 
                                        </Card.Text>
                                        <Card.Text>
                                            Description: {part.description} 
                                        </Card.Text>
                                        {
                                            //Button will navigation the user to the singleCar page for this car.
                                            <Button variant="primary" onClick={ event => window.location.href = "/singlepart?id=" + part.id}>
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
