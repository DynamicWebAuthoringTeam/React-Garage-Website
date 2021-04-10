
// React, Bootstrap Imports
import React from 'react'
import { Container } from 'react-bootstrap'

// Home-made Components
import HomeCarouselCar from '../HomeCarouselCar';
import HomeCarouselPart from '../HomeCarouselPart';
import SiteFooter from '../SiteFooter';

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

            {/* Parts Carousel */}
            <Container className="home-carousel-wrapper">
                <h1 className="home-header">Featured Parts</h1>
                <HomeCarouselPart />
            </Container>
            <SiteFooter></SiteFooter>
        </>
    )

}

export default Home
