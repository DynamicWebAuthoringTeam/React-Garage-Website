//React, Boostrap Imports
import React from 'react';
import { Redirect } from 'react-router-dom'
import { Row, Col, Container, Image, Card, Carousel } from 'react-bootstrap'

import queryString from 'query-string';

//Car Data Import
import { allPartsData } from '../../data/single-part-data';

//Google Maps 3rd party Library Library
import GoogleMapsLibraryComponent from '../GoogleMaps'

//CSS Imports
import './page-css/SingleCar.css';

class SinglePart extends React.Component {
  render() {

    //Collect any query param and their value with 'id'
    const id = queryString.parse(this.props.location.search).id;

    //Find car data by the given id in the query param
    const partData = allPartsData.find(part => part.id === id)

    //Check if a car exists for the given id, if not redirect to /carlisting
    if (partData == null) {
      return (
        <Redirect to='/partlisting' />
      )
    }

    return (
      <>
        {/* Whole page is wrapped in a row with 2x Columns, a main column and a sidebar column */}
        <Row className="row-wrapper">

          {/* This Main Column */}
          <Col lg={7} className="main-column">

            <Container className="main-column-container">

              {/* Primary Part Image */}
              <Card className="main-image-card">
                <Image className='main-image' src={partData.primaryImage} fluid rounded />
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
                          {<Card.Title>{partData.make}</Card.Title>}
                          {<Card.Text> - The Manufacturer of this part.</Card.Text>}
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md>
                      <Card>
                        {<Card.Header as="h5">Model & Year</Card.Header>}
                        <Card.Body>
                          {<Card.Title>{partData.model} - {partData.year}</Card.Title>}
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
                          {<Card.Title>£{partData.price}</Card.Title>}
                          {<Card.Text> - The price is Great British Pounds</Card.Text>}
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md>
                      <Card>
                        {<Card.Header as="h5">Milage and State</Card.Header>}
                        <Card.Body>
                          {<Card.Title> Milage: {partData.miles} miles</Card.Title>}
                          <Card.Text>
                            - The number of miles the part has driven.
                          </Card.Text>
                          {<Card.Title className="title-red"> State of Repair: {partData.condition}</Card.Title>}
                          <Card.Text>
                            - State of repair the part is in asessed by a SpeedFixSales Employee.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <blockquote className="blockquote mb-0">
                    <footer className="blockquote-footer">
                      See full part spec below for more details.
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>

              {/* Full Car Spec */}
              <Card className="key-details-wrapper">
                <Card.Header as="h5">Full Part Specification</Card.Header>
                <Card.Body>
                  {
                    partData.fullSpec.map((data, key) => {
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
                      partData.otherImages.map((data, key) => {
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
                  <Card.Title>{partData.sellerName}</Card.Title>
                  <Card.Text>Mobile: {partData.sellerMobile}</Card.Text>
                  <Card.Text>Email: {partData.sellerEmail}</Card.Text>
                  <Card.Text>Seller Notes: {partData.sellerNotes}</Card.Text>
                </Card.Body>
              </Card>

              {/* Google Api Maps Location */}
              <Card className="side-bar-item-wrapper">
                <Card.Header as="h5">Part Location</Card.Header>
                <Card.Body>
                  <Card.Text>Address: {partData.sellerAddress}</Card.Text>
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

export default SinglePart;