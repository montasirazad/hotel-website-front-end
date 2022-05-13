import React, { useEffect, useState } from 'react';
import './AllBooking.css'

const AllBooking = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7000/bookings')
            .then(res => res.json())
            .then(data => {
                setBookings(data);
                console.log(data);
            })
    }, []);

    return (
        <div className='all-booking'>
            <h1>Total bookings:{bookings.length}</h1>
            {
                bookings.map(booking => <li key={booking._id}> {booking.name} | from:
                 {new Date(booking.checkInDate).toDateString('dd/MM/yyyy')} |
                to: {new Date(booking.checkOutDate).toDateString('dd/MM/yyyy')}
                </li>)
            }
        </div>
    );
};

export default AllBooking;