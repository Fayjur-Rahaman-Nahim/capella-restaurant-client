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
                        src="https://i.ibb.co/f2B8QJP/Top-view-of-roasted-potatoes-served-in-a-gray-plate-on-black-table-The-plate-is-located-at-the-left.jpg"
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item className="banner_item">
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/4fpkBZj/Roasted-chicken-breast-with-green-beans-and-boiled-mashed-potatoes-Dinner-or-breakfast-serving.jpg"
                        alt="Second slide"
                    />


                </Carousel.Item>
                <Carousel.Item className="banner_item">
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/RSDRG3Y/Grilled-Chicken-Legs-With-Vegetable-Skewers-Baked-Beans-and-Coleslaw.jpg"
                        alt="Third slide"
                    />


                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;