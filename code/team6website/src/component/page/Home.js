import React from 'react'

import HomeCarouselCar from '../HomeCarouselCar';
import './css/Home.css';
import { 
    Container, Row, Col, Card, Button
} from 'react-bootstrap'


function Home() {
    return (
        <>
            {/* Cars Carouse */}
            <Container className="home-carousel-wrapper">
                <h1 className="home-header">Featured Cars</h1>
                <HomeCarouselCar/>
            </Container>
            
            {/* Parts Carouse */}
            <Container className="home-carousel-wrapper">
                <h1 className="home-header">Featured Parts</h1>
                <HomeCarouselCar/>
            </Container>
        </>
    )

}

export default Home
