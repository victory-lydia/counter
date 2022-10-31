import React from 'react';
import { Route } from 'react-router-dom';
import { Router } from 'react-router-dom';


function Login(){
    return(
        <div className='container'>
            <h1>login</h1>
           <label className='label'>Email:</label>
            <input type="email" placeholder="johndoe@gmail.com" />
            <label className='label'>Password:</label>
            <input type="password" placeholder="at least 8 characters"/>
            <hr></hr>
            <input type='checkbox' /> I agree with Terms and Privacy
            <p> <strong>Don't have an account?</strong> signup</p>
            <button> Signup</button>
        </div>
    )
}
export default Login();