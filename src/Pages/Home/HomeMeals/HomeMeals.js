import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import HomeMeal from '../HomeMeal/HomeMeal';

const HomeMeals = () => {
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/meals")
            .then(res => res.json())
            .then(data => setMeals(data))
    }, [])

    return (
        <div className="mt-5">
            <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "15px" }} className="text-danger">
                Populer Meals
            </Typography>
            <Container>
                <Grid container spacing={2}>

                    {
                        meals?.slice(0, 6).map(homeMeal => <HomeMeal
                            key={homeMeal._id}
                            homeMeal={homeMeal}></HomeMeal>)
                    }

                </Grid>
            </Container>
        </div>
    );
};

export default HomeMeals;