import React from 'react';
import { Link } from 'react-router-dom';
import GoogleLogo from "../../assets/img/google.svg"
import './Login.css'

const Login = () => {
    return (
        <div className='mt-5 d-flex align-items-center justify-content-center '>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div>
                    <button type="submit" className="btn btn-primary w-100 mt-3">Submit</button>
                </div>
                <span className='cursor '>Forgot password?</span>
                <h6 className='text-center mt-3' style={{ cursor: "pointer" }}><Link to="/signup">
                    New to furnob? Signup</Link></h6>


                <div className='input-wrapper d-flex justify-content-center'>
                    <button className='google-auth btn w-100 d-flex justify-content-around border mt-2'>
                        <img src={GoogleLogo} alt='' />
                        <p className='mt-2'> Continue with Google </p>
                    </button>
                </div>
            </form>

        </div>
    );
};

export default Login;