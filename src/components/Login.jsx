import React, { useState } from "react";
import { Link, NavLink, Navigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateToken } from "../redux/UserSlice";

function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
    console.log(token);
    dispatch(updateToken(token));

    return <Navigate to="/" />;

    // aca tengo que enviar los datos al servidor , hacer el llamado a la api con metodo POST
  };

  return (
    <>
      <h2>Login</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
        <br />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <br />

        <button type="submit">Login</button>
      </form>

      <hr />

      <Link to={"http://localhost:5175/registro"}>
        <button type="button">Registro Component</button>{" "}
      </Link>
    </>
  );
}

export default Login;
