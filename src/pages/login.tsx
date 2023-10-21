import React from 'react';
import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from './firebase';
import Example from '../components/logincomp';

const handleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
};

function Login() {
    return (
        <>
            <Example />
            {/* <button onClick={handleSignIn}>Sign In with Google</button> */}
        </>
    );
}

export default Login;
