/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { FaGithub, FaGooglePlusSquare } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const { logInUser, googleSignIn, gitHubSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

// Login section
  const handleLogin = (e) => {
    e.preventDefault();
    if ((email, password)) {
      logInUser(email, password)
        .then((result) => {
          console.log(result.user);

          navigate(location.state?.pathname || "/", { replace: true });
        })
        .catch((error) => {
          console.log(error);
          setError("Email/Password did not match");
        });
    }
  };

//   google sign in
  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    console.log("google sign in");
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        navigate(location.state?.pathname || "/", { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

// Github sign in
const handleGitHubSignIn = (e) => {
    e.preventDefault();
    console.log("gihub sign in");
    gitHubSignIn()
      .then((result) => {
        console.log(result.user);
        navigate(location.state?.pathname || "/", { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };



  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col w-2/3">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold">Please Login !!</h1>
          </div>
          <form
            onSubmit={handleLogin}
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          >
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
              <p>
                <small>
                  {error && <span className="text-red-600">{error}</span>}
                </small>
              </p>
              <div className="form-control mt-6">
                <button className="btn">Login</button>
                <div>
                  <h1 className="text-center font-bold py-4">Or login with </h1>
                  <span className="flex justify-center gap-4">
                    <button
                      onClick={handleGoogleSignIn}
                      className="btn btn-outline normal-case"
                    >
                      <FaGooglePlusSquare className="mr-1"></FaGooglePlusSquare>{" "}
                      Google
                    </button>
                    <button onClick={handleGitHubSignIn} className="btn btn-outline normal-case">
                      <FaGithub className="mr-1"></FaGithub> GitHub
                    </button>
                  </span>
                </div>
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
