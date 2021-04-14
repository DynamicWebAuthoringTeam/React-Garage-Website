import React from 'react'
import {Carousel, Container, Button} from 'react-bootstrap'
import './component-css/HomeCarouselCar.css';
import { singleCarsData } from '../data/single-cars-data';
import { useHistory } from "react-router"

let featuredCars = singleCarsData.filter(car => car.featuredCar === "yes");


function HomeCarouselCar() {
    let history = useHistory()
    return (
            <Carousel>
                <Carousel.Item>
                <div class="CarImage">
                     <img className="d-block w-100" src={featuredCars[0].primaryImage} alt="First slide"/>
                </div>
                <div class="row">
                    <div class="column">
                        <h2>{featuredCars[0].make} {featuredCars[0].model}</h2>
                        <h2>Year: {featuredCars[0].year}</h2>
                        <h2>Mileage: {featuredCars[0].miles}</h2>
                    </div>
                    <div class="column">
                        <h3>Was: £{featuredCars[0].wasPrice}</h3>
                        <h2 className="now-price">Now: £{featuredCars[0].price}</h2>
                        <Button variant="primary" onClick={event => history.push("/singlecar?id=" + featuredCars[0].id )}>
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
                    <img className="d-block w-100" src={featuredCars[1].primaryImage} alt="Second slide"/>
                </div>
                <div class="row">
                    <div class="column">
                        <h2>{featuredCars[1].make} {featuredCars[1].model}</h2>
                        <h2>Year: {featuredCars[1].year}</h2>
                        <h2>Mileage: {featuredCars[1].miles}</h2>
                    </div>
                    <div class="column">
                        <h3>Was: £{featuredCars[1].wasPrice}</h3>
                        <h2 className="now-price">Now: £{featuredCars[1].price}</h2>
                        <Button variant="primary" onClick={event => history.push("/singlecar?id=" + featuredCars[1].id )}>
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
                    <img className="d-block w-100" src={featuredCars[2].primaryImage} alt="Third slide"/>
                </div>
                <div class="row">
                    <div class="column">
                        <h2>{featuredCars[2].make} {featuredCars[2].model}</h2>
                        <h2>Year: {featuredCars[2].year}</h2>
                        <h2>Mileage: {featuredCars[2].miles}</h2>
                    </div>
                    <div class="column">
                        <h3>Was: £{featuredCars[2].wasPrice}</h3>
                        <h2 className="now-price">Now: £{featuredCars[2].price}</h2>
                        <Button variant="primary" onClick={event => history.push("/singlecar?id=" + featuredCars[2].id )}>
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
                    <img className="d-block w-100" src={featuredCars[3].primaryImage} alt="Fourth slide"/>
                </div>
                <div class="row">
                    <div class="column">
                        <h2>{featuredCars[3].make} {featuredCars[3].model}</h2>
                        <h2>Year: {featuredCars[3].year}</h2>
                        <h2>Mileage: {featuredCars[3].miles}</h2>
                    </div>
                    <div class="column">
                        <h3>Was: £{featuredCars[3].wasPrice}</h3>
                        <h2 className="now-price">Now: £{featuredCars[3].price}</h2>
                        <Button variant="primary" onClick={event => history.push("/singlecar?id=" + featuredCars[3].id )}>
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
                    <img className="d-block w-100" src={featuredCars[4].primaryImage} alt="Fifth slide"/>
                </div>
                <div class="row">
                    <div class="column">
                        <h2>{featuredCars[4].make} {featuredCars[4].model}</h2>
                        <h2>Year: {featuredCars[4].year}</h2>
                        <h2>Mileage: {featuredCars[4].miles}</h2>
                    </div>
                    <div class="column">
                        <h3>Was: £{featuredCars[4].wasPrice}</h3>
                        <h2 className="now-price">Now: £{featuredCars[4].price}</h2>
                        <Button variant="primary" onClick={event => history.push("/singlecar?id=" + featuredCars[4].id )}>
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

export default HomeCarouselCar
