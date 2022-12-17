import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import admin from '../api/admin';
import blockChainStorage from '../utils/storage';

function Login() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');



    const Login = async () => {
        if ( name == '' || password == '') toast.error("Vui lòng nhập thông tin đầy đủ !");
        else {
            try {
                const res = await admin.postLogin({
                    username: name,
                    password: password,
                });
                if (res.success === false) toast.error("Đường truyền bị ngắt ngoãng !");
                else {
                    blockChainStorage.setInfoClient(res)
                    toast.success("Đăng nhập thành công !");
                    navigate('/');
                }
            }
            catch (err) {
                toast.error('Tài khoản ko tồn tại !');
            }
        }
    }

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
                            <input type="text" id="form3Example3" 
                            className="form-control form-control-lg"
                            placeholder="Enter a valid email address"
                            onChange={(e) => setName(e.target.value)}
                            value={name}/>
                        </div>

                        <div className="form-outline mb-3">
                            <input type="password" id="form3Example4" 
                            className="form-control form-control-lg"
                            placeholder="Enter password" 
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}/>
                        </div>

                        <div className="text-center text-lg-start mt-4 pt-2">
                            <button type="submit" className="btn btn-primary btn-lg" onClick={Login}>Login</button>
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