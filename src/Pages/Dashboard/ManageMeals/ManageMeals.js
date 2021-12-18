import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const ManageMeals = () => {
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch("https://lit-meadow-17656.herokuapp.com/meals")
            .then(res => res.json())
            .then(data => setMeals(data))
    }, []);

    //Delete Meal
    const handleDeleteMeal = id => {
        const url = `https://lit-meadow-17656.herokuapp.com/meals/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Deleted Successfully');
                    const remaingPurchaseOrders = meals?.filter(order => order._id !== id);
                    setMeals(remaingPurchaseOrders);
                }
            })
    }
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Meal Name</StyledTableCell>
                        <StyledTableCell align="center">Price</StyledTableCell>
                        <StyledTableCell align="center">Action</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {meals.map((meal) => (
                        <StyledTableRow key={meal._id}>
                            <StyledTableCell align="center">{meal.name}</StyledTableCell>
                            <StyledTableCell align="center">{meal.price}</StyledTableCell>
                            <StyledTableCell align="center">
                                <button className="btn btn-danger mt-2" onClick={() => handleDeleteMeal(meal._id)} >Delete</button>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ManageMeals;