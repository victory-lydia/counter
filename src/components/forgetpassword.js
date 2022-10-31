import React from 'react'

function ForgotPassword(){
    return(
        <div className='container'>
            <h1>Forgot Password</h1>
            <label className='label'>Email:</label>
            <input type="email" placeholder="johndoe@gmail.com" />
            <label className='label'>Change Password:</label>
            <input type="password" placeholder="at least 8 characters"/>
            <label className='label'>Confirm Password:</label>
            <input type="password" placeholder="at least 8 characters"/>
            <hr></hr>
            <input type='checkbox' /> I agree with Terms and Privacy
            <button>Submit</button>
        </div>
    )
}
export default ForgotPassword();