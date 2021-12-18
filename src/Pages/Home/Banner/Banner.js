import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <Carousel className="mt-5 pt-2">
                <Carousel.Item className="banner_item">
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/8MRPJHT/photo-1489516408517-0c0a15662682.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption >
                        <h3>The journey of a thousand miles begins with a single step.</h3>
                        <p>May your journey be eye-opening!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="banner_item">
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/MnCwvy7/photo-1492294112339-ea831887e5d7.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption >
                        <h3>Go safe, move safe, stay safe, leave safe and then back safes</h3>
                        <p>Wherever you go, you take yourself with you.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="banner_item">
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/2633RYg/photo-1528127269322-539801943592.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption >
                        <h3>Wishing you a safe journey and a relaxing vacation when you arrive!</h3>
                        <p>May angels fly with you wherever you roam and guide you back safely to family and home.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;