import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../App.css';
// MU imports /// 
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const Booking = () => {


    const [locale, setLocale] = React.useState('ru');
    const [value, setValue] = React.useState(new Date());

    const selectLocale = (newLocale) => {
        setLocale(newLocale);
    };

    const { title } = useParams()
    return (
        <div className='App'>
            <h3>Thanks for choosing {title}</h3>

            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="CHECK -IN DATE"
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>

            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="CHECK -OUT DATE"
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>


        </div>
    );
};

export default Booking;