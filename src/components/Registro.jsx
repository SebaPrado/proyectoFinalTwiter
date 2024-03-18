import React from "react";
import { Link } from "react-router-dom";

function Registro() {
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
            <form>
              <div className="mb-2">
                <label htmlFor="first-name" className="form-label"></label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                />
              </div>
              <div>
                <label htmlFor="last-name" className="form-label"></label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                />
              </div>
              <div>
                <label htmlFor="email" className="form-label"></label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="username" className="form-label"></label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                />
              </div>
              <div className="">
                <label htmlFor="formFile" className="form-label"></label>
                <input className="form-control" type="file" id="formFile" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label"></label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
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
