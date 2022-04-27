import React from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const {title} =  useParams()
    return (
        <div>
            <h3>Thanks for choosing {title}</h3>
        </div>
    );
};

export default Booking;