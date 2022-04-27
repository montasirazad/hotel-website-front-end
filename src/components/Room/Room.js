import React from 'react';
import { Link } from 'react-router-dom';
import './Room.css'

const Room = (props) => {
    const {title,imgUrl,price} = props.room;
    
    return (
        <div className='room-div'>
            <img src={imgUrl} alt="" />
            <h3>{title}</h3>
            <p>Price: {price}</p>
            <Link to={`/booking/${title}`}><button>Book This room</button></Link>
        </div>
    );
};

export default Room;