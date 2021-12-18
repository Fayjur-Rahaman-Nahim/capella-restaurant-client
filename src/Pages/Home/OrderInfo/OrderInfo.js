import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './OrderInfo.css'

const OrderInfo = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();
    const [meal, setMeal] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/meals/${id}`)
            .then(res => res.json())
            .then(data => setMeal(data))
    }, []);

    const onSubmit = data => {
        const id = meal._id;
        const name = meal.name;

        const OrderInfo = {
            ...data,
            meal_id: id,
            meal_name: name,
            status: 'pending',

        }
        axios.post("http://localhost:5000/order", OrderInfo)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Order Confirmed');
                    reset();
                    navigate('/')
                }
            })
    };
    return (
        <div className="mt-5 pt-5">
            <Header />
            <Row lg={2} xs={1} className="mx-auto">
                <Col >
                    <Card >
                        <Card.Img variant="top" src={meal.img} className="img" />
                        <Card.Body className="text-start">
                            <Card.Title><h4 className="fw-bold text-danger">{meal.name}</h4></Card.Title>
                            <Card.Text>
                                <h6 className="text-dark">{meal.description}</h6>
                                <h4 className="text-dark">Price: {meal.price} Tk.</h4>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="px-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="text-danger fw-bold">Order Confirmation</h1>
                        <div className="form-floating mb-3">
                            <input defaultValue={user.displayName} {...register("name")} type="name" className="form-control" id="floatingInput" readOnly />
                            <label htmlfor="floatingInput">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input defaultValue={user.email} {...register("email")} type="email" className="form-control" id="floatingEmail" readOnly />
                            <label htmlfor="floatingEmail">Email</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input {...register("address")} type="text" className="form-control" id="floatingAddress" placeholder="Address" />
                            <label htmlfor="floatingAddress">Address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input {...register("number")} type="text" className="form-control" id="floatingPhone" placeholder="Phone Number" />
                            <label htmlfor="floatingPhone">Phone Number</label>
                        </div>
                        <input type="submit" className="btn btn-outline-danger form-control" value="Confirm Order" />
                    </form>
                </Col>
            </Row>
            <Footer />
        </div >
    );
};

export default OrderInfo;