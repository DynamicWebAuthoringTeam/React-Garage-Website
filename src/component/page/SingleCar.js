//React, Boostrap Imports
import React from 'react';
import { Redirect } from 'react-router-dom'
import { Row, Col, Container, Image, Card, Carousel } from 'react-bootstrap'

import queryString from 'query-string';

//Car Data Import
import { singleCarsData } from '../../data/single-cars-data';

//Google Maps 3rd party Library Library
import GoogleMapsLibraryComponent from '../GoogleMaps'

//CSS Imports
import './page-css/SingleCar.css';

class SingleCar extends React.Component {
  render() {

    //Collect any query param and their value with 'id'
    const id = queryString.parse(this.props.location.search).id;

    //Find car data by the given id in the query param
    const carData = singleCarsData.find(car => car.id === id)

    //Check if a car exists for the given id, if not redirect to /carlisting
    if (carData == null) {
      return (
        <Redirect to='/carlisting' />
      )
    }

    return (
      <>
        {/* Whole page is wrapped in a row with 2x Columns, a main column and a sidebar column */}
        <Row className="row-wrapper">

          {/* This Main Column */}
          <Col lg={7} className="main-column">

            <Container className="main-column-container">

              {/* Primary Car Image */}
              <Card className="main-image-card">
                <Image className='main-image' src={carData.primaryImage} fluid rounded />
              </Card>

              {/* Key Details */}
              <Card className="key-details-wrapper">
                <Card.Header as="h5">Key Details</Card.Header>
                <Card.Body>
                  <Row className="key-details-row">
                    <Col md>
                      <Card>
                        {<Card.Header as="h5">Manufacturer</Card.Header>}
                        <Card.Body>
                          {<Card.Title>{carData.make}</Card.Title>}
                          {<Card.Text> - The Manufacturer of this car.</Card.Text>}
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md>
                      <Card>
                        {<Card.Header as="h5">Model & Year</Card.Header>}
                        <Card.Body>
                          {<Card.Title>{carData.model} - {carData.year}</Card.Title>}
                          {<Card.Text> - The Model and the specifc year.</Card.Text>}
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Row className="key-details-row">
                    <Col md>
                      <Card>
                        {<Card.Header className="title-red" as="h5">Asking Price £</Card.Header>}
                        <Card.Body>
                          {<Card.Title>£{carData.price}</Card.Title>}
                          {<Card.Text> - The price is Great British Pounds</Card.Text>}
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md>
                      <Card>
                        {<Card.Header as="h5">Milage and State</Card.Header>}
                        <Card.Body>
                          {<Card.Title> Milage: {carData.miles} miles</Card.Title>}
                          <Card.Text>
                            - The number of miles the car has driven.
                          </Card.Text>
                          {<Card.Title className="title-red"> State of Repair: {carData.condition}</Card.Title>}
                          <Card.Text>
                            - State of repair the car is in, as assessed by a SpeedFixSales Employee.
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
              <Card className="key-details-wrapper">
                <Card.Header as="h5">Full Car Specification</Card.Header>
                <Card.Body>
                  {
                    carData.fullSpec.map((data, key) => {
                      return (
                        <div key={key}>
                          {data}
                        </div>
                      );
                    })
                  }
                </Card.Body>
              </Card>

            </Container>
          </Col>

          {/* Sidebar Column */}
          <Col lg={5} className="sidebar-column">
            <Container>
              {/* other Car images */}
              <Card className="side-bar-item-wrapper">
                <Card.Header as="h5">Other Images of this car</Card.Header>
                <Card.Body>
                  <Carousel>
                    {/* Loop through 'otherImages' and create a Carousel.Item for each image found*/}
                    {
                      carData.otherImages.map((data, key) => {
                        return (
                          <Carousel.Item key={key}>
                            <img className="d-block w-100" src={data} />
                          </Carousel.Item>
                        );
                      })
                    }
                  </Carousel>
                </Card.Body>
              </Card>

              {/* Seller Contact Info */}
              <Card className="side-bar-item-wrapper">
                <Card.Header as="h5">Seller Information</Card.Header>
                <Card.Body>
                  <Card.Title>{carData.sellerName}</Card.Title>
                  <Card.Text>Mobile: {carData.sellerMobile}</Card.Text>
                  <Card.Text>Email: {carData.sellerEmail}</Card.Text>
                  <Card.Text>Seller Notes: {carData.sellerNotes}</Card.Text>
                </Card.Body>
              </Card>

              {/* Google Api Maps Location */}
              <Card className="side-bar-item-wrapper">
                <Card.Header as="h5">Car Location</Card.Header>
                <Card.Body>
                  <Card.Text>Address: {carData.sellerAddress}</Card.Text>
                  <GoogleMapsLibraryComponent></GoogleMapsLibraryComponent>
                </Card.Body>
              </Card>
            </Container>
          </Col>
        </Row>
      </>
    )
  }
}

export default SingleCar;