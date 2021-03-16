import React from 'react'
import {Carousel, Container} from 'react-bootstrap'
import './component-css/HomeCarouselCar.css';

function HomeCarouselCar() {
    return (
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://www.topgear.com/sites/default/files/styles/16x9_1280w/public/images/news-article/2015/12/6f112bbafabd5ed6981333d03eb25d7f/172858197156680a0ce3aca.jpg?itok=sAZQJRvS" alt="First slide"/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://motorsport-magazine.s3.eu-west-1.amazonaws.com/wp-content/uploads/2020/02/13154541/Subaru07Por.jpg" alt="Second slide"/>

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://www.topgear.com/sites/default/files/styles/16x9_1280w/public/images/news-article/2015/12/6f112bbafabd5ed6981333d03eb25d7f/172858197156680a0ce3aca.jpg?itok=sAZQJRvS" alt="Third slide"/>

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    )
}

export default HomeCarouselCar
