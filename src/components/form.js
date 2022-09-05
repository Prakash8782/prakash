import React, { useState } from "react";
import './form.css';

function Form(props) {

    const [form, setForm] = useState({
        restaurant: '',
        variety: '',
        offer: '',
        price: '',
        ratings: '',
        food: ''
    });

    const resHandler = (event) => {
        setForm((previousform) => {
            return { ...previousform, restaurant: event.target.value }
        });
    }
    const varHandler = (event) => {
        setForm((previousform) => {
            return { ...previousform, variety: event.target.value }
        });
    }
    const offHandler = (event) => {
        setForm((previousform) => {
            return { ...previousform, offer: event.target.value }
        });
    }
    const priHandler = (event) => {
        setForm((previousform) => {
            return { ...previousform, price: event.target.value }
        });
    }
    const ratHandler = (event) => {
        setForm((previousform) => {
            return { ...previousform, ratings: event.target.value }
        });
    }
    const foodHandler = (event) => {
        setForm((previousform) => {
            return { ...previousform, food: event.target.value }
        });
    }

    const subjectHandler = (a) => {
        a.preventDefault();
        const addedform = { ...form, id: Math.random().toString() }
        props.onFormAdded(addedform);
        setForm({
            restaurant: '',
            variety: '',
            offer: '',
            price: '',
            ratings: '',
            food: ''
        })
    }

    return (
        <div className="form">
            <h3>Add New Food</h3>
            <form onSubmit={subjectHandler}>
                <input type="text" placeholder="Restaurant Name" value={form.restaurant} onchange={resHandler}></input>
                <input type="text" placeholder="Variety" value={form.variety} onchange={varHandler}></input>
                <input type="number" placeholder="Offers" value={form.offer} onchange={offHandler}></input>
                <input type="number" placeholder="Price" value={form.price} onchange={priHandler}></input>
                <input type="number" placeholder="Ratings" value={form.ratings} onchange={ratHandler}></input>
                <input type="id" placeholder="Food" value={form.food} onchange={foodHandler}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default Form;