import React from 'react'
import firebase, { auth } from 'firebase/app'
import 'firebase/auth'

function SignIn() {
    return (
        <div>
            <button onClick = {()=> {
                    const provider = new firebase.auth.GoogleAuthProvider();
                    auth.sign

            }}>Sign In</button>
        </div>
    )
}

export default SignIn
