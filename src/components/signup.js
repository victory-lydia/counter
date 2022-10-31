import React from 'react'
import {Link} from 'react-router-dom'


function Signup() {
    return (
        <div className='container'>
            <h1>Sign up</h1>
            <form className="form-container">
                <label className='label'>Name:</label>
                <input type="text" placeholder="John Doe" />
                <label className='label'>Email:</label>
                <input type="email" placeholder="johndoe@gmail.com" />
                <label className='label'>Password:</label>
                <input type="password" placeholder="at least 8 characters" />
                <hr></hr>
                <input type='checkbox' /> I agree with Terms and Privacy
                <button><Link to="/Login">Login</Link></button>
            </form>
        </div>
    )
}
export default Signup();