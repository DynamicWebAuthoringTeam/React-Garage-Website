//React, Boostrap Imports
import React from 'react';
import { Redirect } from 'react-router-dom';
import { Row, Col, Container, Image, Card} from 'react-bootstrap';
import queryString from 'query-string';
import { allPartsData } from '../../data/single-part-data';

//CSS Imports
import './page-css/SinglePart.css';

class SinglePart extends React.Component {
    render() {
  
      //Collect any query params and their value with 'id'
      const id = queryString.parse(this.props.location.search).id;
  
      //Find part data by the given id
      const partData = allPartsData.find(part => part.id === id)
  
      //Check if a part exists for the given id, if not redirect to /partlisting
      if (partData == null) {
        return (
          <Redirect to='/partlisting' />
        )
      }
  
      return (
        <>
          {/* Whole page is wrapped in a row with 2x Columns, a main column and a sidebar column */}
          <Container>
          <Row className="row-wrapper">
  
            {/* This Main Column */}
            <Col className="main-column">
  
              <Container className="main-column-container">
  
                {/* Primary Car Image */}
                <Card className="main-image-card">
                  <Image className='main-image' src={partData.primaryImage} fluid rounded />
                </Card>
  
                {/* Key Details */}
                <Card className="key-details-wrapper">
                  <Card.Header as="h5">{partData.name}</Card.Header>
                  <Card.Body>
                    <Row className="key-details-row">
                      <Col md>
                        <Card>
                          {
                            <Card.Header as="h5">Manufacturer</Card.Header>
                          }
                          <Card.Body>
                            {<Card.Title>{partData.make}</Card.Title>}
                            {<Card.Text> - The Manufacturer of this Part.</Card.Text>}
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
                          {<Card.Header as="h5">Description and State</Card.Header>}
                          <Card.Body>
                            {<Card.Title> Description:</Card.Title>}
                            <Card.Text>
                              - {[partData.description]}
                            </Card.Text>
                            {<Card.Title className="title-red"> State of Repair: {partData.condition}</Card.Title>}
                            <Card.Text>
                              - State of repair the part is in, as assessed by a SpeedFixSales Employee.
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
  
                {/* Full part Spec */}
                <Card className="key-details-wrapper">
                  <Card.Header as="h5">Full part Specification</Card.Header>
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
          </Row>
          </Container>
        </>
      )
    }
  }
  
  export default SinglePart;
