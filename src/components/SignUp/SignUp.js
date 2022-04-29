import React from 'react';
import { Link } from 'react-router-dom';
import GoogleLogo from "../../assets/img/google.svg"

const SignUp = () => {
    return (
        <div>
            <div className='mt-5 d-flex align-items-center justify-content-center '>
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" name="email1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" />
                    </div>
                    <div className="">
                        <label for="exampleInputPassword1" className="form-label">confirm Passoword</label>
                        <input type="password" className="form-control" name="confirm-password" />
                    </div>
                    <Link to="/login"><h6 className='mt-3'> Already have an account? Login</h6></Link>

                    <button type="submit" className="btn btn-primary mt-3 w-100">Signup</button>
                    <div className='input-wrapper d-flex justify-content-center'>
                        <button className='google-auth btn w-100 d-flex justify-content-around border mt-3'>
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