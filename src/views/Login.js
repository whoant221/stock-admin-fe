import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react'

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (e) => {
        e.preventDefault();
        console.log(email, password);
        const userData = {
            email,
            password,
        };
        localStorage.setItem('token-info', JSON.stringify(userData));
        setEmail('');
        setPassword('');
    };
    const logout = () => { localStorage.removeItem('token-info') }

    //set user chua dang nhap
    // useEffect(() => {
    //         if (!userData) { navigate('/login');}
    // }, [navigate]);
  return (
    <main className="vh-100">
        <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-9 col-lg-6 col-xl-5">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                        className="img-fluid" alt="Sample image"> 
                    </img>
                </div>
                <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                    <form action="">

                        <div className="form-outline mb-4">
                            <input type="email" id="form3Example3" 
                            className="form-control form-control-lg"
                            placeholder="Enter a valid email address"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}/>
                        </div>

                        <div className="form-outline mb-3">
                            <input type="password" id="form3Example4" 
                            className="form-control form-control-lg"
                            placeholder="Enter password" 
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}/>
                        </div>

                        <div className="text-center text-lg-start mt-4 pt-2">
                            <button type="submit" className="btn btn-primary btn-lg" onClick={login}>Login</button>
                            {/* <button onClickCapture={logout}>logout user</button> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Login