import React from 'react'
import {Carousel, Container, Button} from 'react-bootstrap'
import './component-css/HomeCarouselPart.css';
import { allPartsData } from '../data/single-part-data';
import { useHistory } from "react-router"

let featuredParts = allPartsData.filter(part => part.featuredPart === "yes");

function HomeCarouselPart() {
    let history = useHistory()
    return (
            <Carousel>
                <Carousel.Item>
                <div class="CarImage">
                     <img className="d-block w-100" src={featuredParts[0].primaryImage} alt="First slide"/>
                </div>
                <div class="row">
                    <div class="column">
                        <h2>{featuredParts[0].name}</h2>
                        <h2>Model: {featuredParts[0].model}</h2>
                        <h2>Make: {featuredParts[0].make}</h2>
                    </div>
                    <div class="column">
                        <h3>Was: £{featuredParts[0].wasPrice}</h3>
                        <h2 className="now-price">Now: £{featuredParts[0].price}</h2>
                        <Button variant="primary" onClick={event => history.push("/singlepart?id=" + featuredParts[0].id )}>
                            More Details
                        </Button>
                    </div>
                </div> 
                <div class="blank-row-spacing">
                    <hr></hr>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div class="CarImage">
                     <img className="d-block w-100" src={featuredParts[1].primaryImage} alt="Second slide"/>
                </div>
                <div class="row">
                    <div class="column">
                        <h2>{featuredParts[1].name}</h2>
                        <h2>Model: {featuredParts[1].model}</h2>
                        <h2>Make: {featuredParts[1].make}</h2>
                    </div>
                    <div class="column">
                        <h3>Was: £{featuredParts[1].wasPrice}</h3>
                        <h2 className="now-price">Now: £{featuredParts[1].price}</h2>
                        <Button variant="primary" onClick={event => history.push("/singlepart?id=" + featuredParts[1].id )}>
                            More Details
                        </Button>
                    </div>
                </div> 
                <div class="blank-row-spacing">
                    <hr></hr>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div class="CarImage">
                     <img className="d-block w-100" src={featuredParts[2].primaryImage} alt="Third slide"/>
                </div>
                <div class="row">
                    <div class="column">
                        <h2>{featuredParts[2].name}</h2>
                        <h2>Model: {featuredParts[2].model}</h2>
                        <h2>Make: {featuredParts[2].make}</h2>
                    </div>
                    <div class="column">
                        <h3>Was: £{featuredParts[2].wasPrice}</h3>
                        <h2 className="now-price">Now: £{featuredParts[2].price}</h2>
                        <Button variant="primary" onClick={event => history.push("/singlepart?id=" + featuredParts[2].id )}>
                            More Details
                        </Button>
                    </div>
                </div> 
                <div class="blank-row-spacing">
                    <hr></hr>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div class="CarImage">
                     <img className="d-block w-100" src={featuredParts[3].primaryImage} alt="fourth slide"/>
                </div>
                <div class="row">
                    <div class="column">
                        <h2>{featuredParts[3].name}</h2>
                        <h2>Model: {featuredParts[3].model}</h2>
                        <h2>Make: {featuredParts[3].make}</h2>
                    </div>
                    <div class="column">
                        <h3>Was: £{featuredParts[3].wasPrice}</h3>
                        <h2 className="now-price">Now: £{featuredParts[3].price}</h2>
                        <Button variant="primary" onClick={event => history.push("/singlepart?id=" + featuredParts[3].id )}>
                            More Details
                        </Button>
                    </div>
                </div> 
                <div class="blank-row-spacing">
                    <hr></hr>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div class="CarImage">
                     <img className="d-block w-100" src={featuredParts[4].primaryImage} alt="fith slide"/>
                </div>
                <div class="row">
                    <div class="column">
                        <h2>{featuredParts[4].name}</h2>
                        <h2>Model: {featuredParts[4].model}</h2>
                        <h2>Make: {featuredParts[4].make}</h2>
                    </div>
                    <div class="column">
                        <h3>Was: £{featuredParts[4].wasPrice}</h3>
                        <h2 className="now-price">Now: £{featuredParts[4].price}</h2>
                        <Button variant="primary" onClick={event => history.push("/singlepart?id=" + featuredParts[4].id )}>
                            More Details
                        </Button>
                    </div>
                </div> 
                <div class="blank-row-spacing">
                    <hr></hr>
                </div>
                </Carousel.Item>
            </Carousel>
    )
}

export default HomeCarouselPart
