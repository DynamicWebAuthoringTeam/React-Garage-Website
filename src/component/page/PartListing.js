
import React, { useState, RangeSlider} from 'react';
import {Row, Col, Card, Button, DropdownButton, Dropdown, Form } from 'react-bootstrap'
import { allPartsData } from '../../data/single-part-data';
import '../component-css/CarCards.css';
import Media from 'react-media';

 function PartListing() {

    //State Variables
    // const [ rangeLowerBound, setRangeLowerBound ] = React.useState(0);
    // const [ rangeHigherBound, setRangeHigherBound] = React.useState(100000000);
    const [ value, setValue ] = React.useState(0);
    const [ value2, setValue2 ] = React.useState(9999);

    const [filterdParts, setFilterParts] = useState(allPartsData);
    const [count, setCount] = useState(0);
    const [inputFilter, setInputFilter] = useState('None');

    // const SliderWithLabel = () => {

    //     const [ value, setValue ] = React.useState(50);
      
    //     return (
    //       <Form>
    //         <Form.Group>
    //           <Form.Label>
    //             My Label
    //           </Form.Label>
    //           <RangeSlider
    //             value={value}
    //             onChange={e => setValue(e.target.value)}
    //           />
    //         </Form.Group>
    //       </Form>
    //     );
      
    //   };


    return (
        <div>
            {/* {SliderWithLabel} */}
            <Form>
            <Form.Row>
            <DropdownButton id="dropdown-basic-button" title={` Filter: ${inputFilter} `}>
                <Dropdown.Item onClick={ () => {setInputFilter('None')}}>None</Dropdown.Item>
                <Dropdown.Item onClick={ () => {setInputFilter('id')}}>Id</Dropdown.Item>
                <Dropdown.Item onClick={ () => {setInputFilter('make')}}>Make</Dropdown.Item>
                <Dropdown.Item onClick={ () => {setInputFilter('model')}}>Model</Dropdown.Item>

            </DropdownButton>
                <Col xs={7}>
                    <Form.Control placeholder="add a filter" />
                </Col>
                <Col>
                    <Form.Control placeholder="Name" />
                </Col>
            </Form.Row>
            </Form>
            <Form>
            <Form.Group controlId="rangefilter" as={Row}>
                <Col>
                    <Row>
                        <Col xs="9">
                            <Form.Control type="range" value={value} onChange={e => setValue(e.target.value)} min={0} max={9999}  />
                        </Col>
                        <Col xs="3">
                            <Form.Control value={value}/>
                            {/* <Form.Label>Upper Price Bound ${value}</Form.Label> */}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control type="range" value={value2} onChange={e => setValue2(e.target.value)} min={0} max={9999}  />
                        </Col>
                        <Col>
                            <Form.Control value={value2}/>
                            {/* <Form.Label>Upper Price Bound ${value2}</Form.Label> */}
                        </Col>
                    </Row>
                    </Col>
            </Form.Group>
            </Form>
        
            <p> Current filter {inputFilter} times </p>
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
