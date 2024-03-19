import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="order-list col-2 m-3 p-0">
      <div></div>
      <ul className="lista">
        <li className="mx-1">
          <Link to="/" className="links">
            <FontAwesomeIcon icon={faXmark} size="lg" color="white" />
          </Link>
        </li>
        <li className="mx-1">
          <Link to="/" className="links">
            <FontAwesomeIcon icon={faHome} size="sm" color="white" />
            <span className="text-white"> Home</span>
          </Link>
        </li>
        <li className="mx-1 mb-2">
          <Link to="/profile" className="links">
            <FontAwesomeIcon icon={faUser} size="sm" color="white" />
            <span className="text-white"> User</span>
          </Link>
        </li>
        <button className="btn btn-primary mx-3">Tweet</button>
        <button className="btn btn-danger size-button mx-3 mt-2">Logout</button>
      </ul>
    </div>
  );
}

export default Navbar;
