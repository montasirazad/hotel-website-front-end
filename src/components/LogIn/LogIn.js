import React from 'react';
import useAuth from '../Hooks/useAuth';
import './Login.css';


const LogIn = () => {

    const { googleLogIn} =useAuth()


    return (
        <div className='login-div'>
           <p>please log in</p>
           
                    <button onClick={googleLogIn}>LoG in with google</button>
          

        </div>
    );
};

export default LogIn;