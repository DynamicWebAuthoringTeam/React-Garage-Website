
// React, Bootstrap Imports
import React from 'react'
import { Container, Alert, Button } from 'react-bootstrap'

// Home-made Components
import HomeCarouselCar from '../HomeCarouselCar';

// CSS Imports
import './page-css/Home.css';

function Home() {
    return (
        <>
        
            {/* Cars Carousel */}
            <Container className="home-carousel-wrapper">
                <h1 className="home-header">Featured Cars</h1>
                <HomeCarouselCar />
            </Container>

            {/* TODO Parts Carousel, either abstract Carousel to take input or make separate component for Parts */}
            <Container className="home-carousel-wrapper">
                <h1 className="home-header">Featured Parts</h1>
                <HomeCarouselCar />
            </Container>
        </>
    )

}

export default Home
