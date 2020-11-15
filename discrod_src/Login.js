import React from 'react'
import './Login.css'
import Button from '@material-ui/core/Button'
import { auth, provider } from './firebase'

function Login() {

    const signIn = e => {
        auth.signInWithPopup(provider)
        .catch((error) => alert(error.message))
    };


    return (
        <div className='Login'>
            <div className='Login__logo'>
                <img src='https://st3.depositphotos.com/1064969/14025/v/450/depositphotos_140252922-stock-illustration-referee-avatar-icon.jpg' alt='saab' />
            </div>
            <Button onClick={signIn} >Sign in</Button>
        </div>
    )
}

export default Login
