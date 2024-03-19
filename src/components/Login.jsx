import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateToken } from "../redux/userSlice"

function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios({
      method: `POST`,
      url: `http://localhost:3004/token`,
      data: {
        username: username,
        password: password,
      },
    });
    const token = response.data;
    console.log({ response });
    dispatch(updateToken(token));

    navigate("/");

    // aca tengo que enviar los datos al servidor , hacer el llamado a la api con metodo POST
  };

  return (
    <div className="container login-both-sides">
      <div className="row">
        <div className="col-7 login-left-side d-none d-md-flex p-3">
          <h2>X</h2>
          <p>Hey! Nice to see you again.</p>
        </div>
        <div className="col-12 col-md-5 d-flex login-right-side p-3">
          <h2>Login</h2>
          <p>Ready to start using X?</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="form-control"
                value={username}
                onChange={handleUsernameChange}
                placeholder="Username or Email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className="form-control"
                placeholder="Password"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
          <p className="mt-3">
            Don't have an account?{" "}
            <Link to="/registro" className="links">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
