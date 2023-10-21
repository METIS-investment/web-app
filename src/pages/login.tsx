import React from 'react';
import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from './firebase';
import Example from '../components/logincomp';

const handleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
};

function Login({login, setLogin}: {login: boolean, setLogin: any}) {
    return (
        <>
            <Example login={login} setLogin={setLogin}/>
        </>
    );
}

export default Login;
