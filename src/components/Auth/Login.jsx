/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation()
  const { logInUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('')

  const handleLogin = (e) => {
    e.preventDefault();
    if(email,password){
        logInUser(email,password)
        .then(result=>{
            console.log(result.user)
            setError('')
            navigate(location.state?.pathname || '/', {replace: true})
        })
        .catch((error) => {
            console.log(error)
            setError('Email/Password did not match')
            
        }) 
  }}
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col w-2/3">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold">Please Login !!</h1>
          </div>
          <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                
                {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}
              </div>
              <p><small>{error && <span className="text-red-600">{error}</span>}</small></p>
              <div className="form-control mt-6">
                <button className="btn">Login</button>
              </div>
              <p>
                <small>
                  New to this page?{" "}
                  <Link className="text-blue-800 underline" to="/register">
                    create an account here
                  </Link>
                </small>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
