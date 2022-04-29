import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import GoogleLogo from "../../assets/img/google.svg"
import auth from '../firebase.init';

const SignUp = () => {
    const [signInWithGoogle, googleUser, googleLoading, goolgeError] = useSignInWithGoogle(auth);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [codeError, setCodeError] = useState('')
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    console.log(error);
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    const hanldePasswordChange = e => {
        setPassword(e.target.value)
    }
    const handleConfirmPassword = e => {
        setConfirmPass(e.target.value)
    }
    const handleSignup = e => {
        e.preventDefault()

        if (password !== confirmPass) {

            setCodeError("two password mismatched")
            return
        }
        createUserWithEmailAndPassword(email, password)

    }
    return (
        <div>
            <div className='mt-5 d-flex align-items-center justify-content-center '>
                <form onSubmit={handleSignup}>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input onChange={handleEmailChange} type="email" className="form-control" name="email" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input onChange={hanldePasswordChange} type="password" className="form-control" name="password" />
                    </div>
                    <div className="">
                        <label className="form-label">confirm Passoword</label>
                        <input onChange={handleConfirmPassword} type="password" className="form-control" name="confirmPassword" />
                    </div>
                    <Link to="/login"><h6 className='mt-3'> Already have an account? Login</h6></Link>
                    {
                        codeError && <p>{codeError}</p>
                    }
                    {
                        error && <p>{error?.message}</p>
                    }
                    <button type="submit" className="btn btn-primary mt-3 w-100">Signup</button>
                    <div className='input-wrapper d-flex justify-content-center'>
                        <button onClick={() => signInWithGoogle()} className='google-auth btn w-100 d-flex justify-content-around border mt-3'>
                            <img src={GoogleLogo} alt='' />
                            <p className='mt-2'> Continue with Google </p>
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default SignUp;