import React from 'react'
import "./SignUp.scss"
const SignUp = () => {
    return (
        <div className='sign_up_container'>

            <div className='heading'>
                <h1>Sign up and get exclusive  special deals</h1>
            </div>
            <div className='signup'> 
                <div><input type="text" /></div>
                <button>Sign Up</button>
            </div>
        </div>
    )
}

export default SignUp
