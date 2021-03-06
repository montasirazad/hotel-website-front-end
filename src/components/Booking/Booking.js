import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../../App.css';
import useAuth from '../Hooks/useAuth';
// MU imports /// 
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Button from '@mui/material/Button';
import AllBooking from '../AllBooking/AllBooking';





const Booking = () => {

    const [selectedDate, setSelectedDate] = useState({
        checkInDate: new Date(),
        checkOutDate: new Date()
    })

    const { loggedInUser } = useAuth()

    const { title } = useParams();

    const roomType = { roomTitle: title };

    const handleCheckInDate = date => {
        const newDate = { ...selectedDate }
        newDate.checkInDate = date;
        setSelectedDate(newDate);
    }

    const handleCheckOutDate = date => {
        const newDate = { ...selectedDate }
        newDate.checkOutDate = date;
        setSelectedDate(newDate);
    }
    const handleBooking = () => {
        const newBooking = { ...loggedInUser, ...roomType, ...selectedDate }
        fetch('http://localhost:7000/add-booking', {
            method: 'post',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newBooking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Room booked successfully')
                }
            })
        console.log(newBooking);
    }
    return (
        <div className='App'>

            <h3>Thanks for choosing {title}</h3>
            <Link to='/'><p>Want another room ...?</p></Link> <br /><br />

            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="CHECK -IN DATE"
                    value={selectedDate.checkInDate}
                    onChange={handleCheckInDate}
                    renderInput={(params) => <TextField {...params} />}
                    inputFormat='dd/MM/yyyy'
                />
            </LocalizationProvider>

            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="CHECK -OUT DATE"
                    value={selectedDate.checkOutDate}
                    onChange={handleCheckOutDate}
                    renderInput={(params) => <TextField {...params} />}
                    inputFormat='dd/MM/yyyy'
                />
            </LocalizationProvider> <br /> <br />

            <Button onClick={handleBooking} variant="outlined" color="primary" size="large">BOOK NOW </Button>

            <AllBooking />
        </div>
    );
};

export default Booking;