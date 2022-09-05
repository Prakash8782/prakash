import './body.css';
import { useEffect, useState } from 'react';
import FoodList from './foodlist';
import Form from './form';

function Body(props){
    // const [foods,setfoods]=useState([...foodlist]);
    // function updateFoods(newFoods){
    //   setfoods([...foods,newFoods])
    // }

    const foodList=[];
    const[foods,setFoods]=useState(foodList);

    const addBodyHandler=(foods)=>{
        fetch('https://6313a3dcfc9dc45cb4e43afd.mockapi.io/hotels',{
            method: 'POST',
            headers: {
                'Accept': 'application/json,text/plain,*/*',
                'Content-Type': 'application/json',
                'Accept-Charset': 'utf-8'
                },
            body: JSON.stringify(foods)
        }).then(res => res.json());
        
        setFoods((prevfoods)=>{
            return[...[foods],...prevfoods]
        })
        }

        useEffect(()=>{
            document.title="Food Effects"
            const intervalId=setInterval(()=>{
                fetch('https://6313a3dcfc9dc45cb4e43afd.mockapi.io/hotels').then((response)=>{
                    if(response.ok){
                        return response.json()
                    }
                    return false;
                }).then((response)=>{
                    if(response){
                        setFoods(response);
                    }
                })
        },1000);
        return()=>{
            clearInterval(intervalId);
            }
        },[]);

        const clickHandler =()=>{
            setFoods((prevfoods)=>{
                return[...[{
                    "restaurant":"restaurant 1",
                    "variety":"variety 1",
                    "offer":8,
                    "price":61,
                    "ratings":60,
                    "food":"1"
                }], ...prevfoods]
            });
        }

        const logout =()=>{
            props.logout(false)
        }
        
    return(
        <div className='container'>
            <button onClick={logout}>Logout</button>
            <Form onFormAdded={addBodyHandler}></Form>
            <FoodList foods={foods}></FoodList>
            <button onClick={clickHandler}>Add Foods</button>
        </div>

    )
}

export default Body;