import React from 'react';

import { useSelector } from 'react-redux';



const Users = () => {

    /***************** Redux Hook ******************/
    const userName = useSelector(state => state.auth.user);


    return (

                <div className='container'>
                    <div class='jumbotron mt-5'>
                        <h5 class='lead'>Profile Page </h5>
                        <h1 class='display-4'>Hello, {userName} !</h1>
                        <hr class='my-4' /> 
                    </div>
                </div> 
    )
};

export default Users;
