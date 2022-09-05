import './food.css';
import {useState} from 'react';

function Foods(props){
    const [price,setPrice]=useState(props.price);
        const clickHandler =()=>{
            let newPrice=(props.price-(props.offer/100)*props.price);
           setPrice(newPrice);
        }
    return(
        <div className='foods-container'>
            <div className='list'>{props.restaurant}</div>
            <div className='list'>{props.variety}</div>
            <div className='list'>{'offer '}{props.offer}</div>
            <div className='list'>{'$ '}{price}</div>
            <div className='list'>{props.ratings}</div>
            <div className='list'>{props.food}</div>
            <button onClick={clickHandler}> button</button>
        </div>
    );
}

export default Foods;
