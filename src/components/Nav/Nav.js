import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './Nav.css';


const Nav = () => {
    const { user, googleLogOut } = useAuth()
    return (
        <div className='nav-container'>
            <Link to='/home'>Home</Link>
            {/* <Link to='/room'>Room</Link> */}
            <Link to='/login'>Log IN</Link>

            {
                user.email && <>
                    <p style={{margin:'8px'}}>Welcome, {user.displayName}</p>
                    <button style={{margin:'8px'}} onClick={googleLogOut}>Log Out</button>
                    <img src={user.photoURL} alt="" style={{margin:'8px',height:'50px'}} />
                </>
            }
        </div>
    );
};

export default Nav;