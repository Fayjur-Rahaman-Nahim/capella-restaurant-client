import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomeMeals from '../HomeMeals/HomeMeals';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <HomeMeals></HomeMeals>
            <Footer></Footer>
        </div>
    );
};

export default Home;