import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomeMeals from '../HomeMeals/HomeMeals';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <HomeMeals></HomeMeals>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;