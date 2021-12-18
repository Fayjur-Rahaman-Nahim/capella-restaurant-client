import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import ExploreMoreMeal from '../ExploreMoreMeal/ExploreMoreMeal';
import Header from '../Home/Header/Header';
import Footer from '../Home/Footer/Footer';


const ExploreMore = () => {
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch("https://lit-meadow-17656.herokuapp.com/meals")
            .then(res => res.json())
            .then(data => setMeals(data))
    }, [])
    return (
        <div className="mt-5 pt-5">
            <Header></Header>
            <Container>
                <Grid container spacing={2}>

                    {
                        meals.map(exploreMoreMeal => <ExploreMoreMeal
                            key={exploreMoreMeal._id}
                            exploreMoreMeal={exploreMoreMeal}></ExploreMoreMeal>)
                    }

                </Grid>
            </Container >
            <Footer></Footer>
        </div >
    );
};

export default ExploreMore;