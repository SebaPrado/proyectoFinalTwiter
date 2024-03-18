import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Registro() {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    email: "",
    descripcion: "No hay descripcion",
    fotoDePerfil: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios({
      method: `POST`,
      url: `http://localhost:3004/usuarios`,
      data: data,
    });
    console.log("Usuario creado:", response.data);
  };

  return (
    <>
      <h2>Registro</h2>
      <div className="container signUp-both-sides">
        <div className="row">
          <div className="col-7 login-left-side d-none d-md-flex p-3">
            <h2>X</h2>
            <p>Hey! Welcome to X clone.</p>
          </div>
          <div className="col-12 col-md-5 d-flex login-right-side p-3">
            <h2>Sign up</h2>
            <p>Create an account and start using X</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label htmlFor="first-name" className="form-label"></label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  value={data.firstname}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="last-name" className="form-label"></label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  value={data.lastname}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email" className="form-label"></label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={data.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="username" className="form-label"></label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={data.username}
                  onChange={handleChange}
                />
              </div>
              <div className="">
                <label htmlFor="formFile" className="form-label"></label>
                <input
                  className="form-control"
                  type="file"
                  id="formFile"
                  value={data.fotoDePerfil}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label"></label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={data.password}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Sign up
              </button>
            </form>
            <p className="mt-3">
              Don't have an account?{" "}
              <Link to="/login" className="links">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registro;
