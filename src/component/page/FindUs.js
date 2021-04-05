import React from 'react'

import { Card } from 'react-bootstrap'

import GoogleMapsLibraryComponent from '../GoogleMaps'

import './page-css/FindUs.css';



function FindUs() {
    return (
        <container className="cards-container">
        <div class="col d-flex justify-content-center">
			<Card className="map-wrapper">
                <Card.Header as="h5">Our Locations</Card.Header>
                <Card.Body>
                	<GoogleMapsLibraryComponent></GoogleMapsLibraryComponent>
                </Card.Body>
            </Card>  
        </div> 
        <div class="blank-row-spacing">
                    <hr></hr>
                </div>   
        <div class="col d-flex justify-content-center">
			<Card className="online-wrapper">
                <Card.Header as="h5">Find Us Online</Card.Header>
                <Card.Body>
                	<p>fsgfhklhjhgf7i7yfuh</p>
                </Card.Body>
            </Card>  
        </div>       
        </container>
    )
}

export default FindUs
