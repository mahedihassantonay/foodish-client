/* eslint-disable no-unused-vars */
import { Result } from "postcss";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Register = () => {
  const { registerUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    if (password.length < 6) {
      setError("The password should atleast 6 character long");
      return;
    } else {
      setError("");
    }
    if ((name, email, password)) {
      registerUser(email, password)
        .then((result) => {
          console.log(result.user);
          navigate("/login");
          updateUserProfile(result.user, name, photoUrl);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col w-2/3">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold">Register Here !!</h1>
          </div>
          <form
            onSubmit={handleRegister}
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                  type="text"
                  placeholder="your name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
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
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <p>
                <small>
                  {error && <span className="text-red-600">{error}</span>}
                </small>
              </p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  onChange={(e) => setPhotoUrl(e.target.value)}
                  type="text"
                  name="photoUrl"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn">Register</button>
              </div>
              <p>
                <small>
                  Already Have an account?{" "}
                  <Link className="text-blue-800 underline" to="/login">
                    Login
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

export default Register;
