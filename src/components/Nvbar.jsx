import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="order-list col-2 m-3 p-0">
      <ul className="lista">
        <li className="m-1">
          <Link to="" className="links">
            <FontAwesomeIcon icon={faXmark} size="lg" />
          </Link>
        </li>
        <li className="m-1">
          <Link to="" className="links">
            <FontAwesomeIcon icon={faHome} size="sm" />
            <span> Home</span>
          </Link>
        </li>
        <li className="m-1">
          <Link to="" className="links">
            <FontAwesomeIcon icon={faUser} size="lg" />
            <span> User</span>
          </Link>
        </li>
        <button className="btn btn-primary m-1">Tweet</button>
        <button className="btn btn-danger size-button mt-3">Logout</button>
      </ul>
    </div>
  );
}

export default Navbar;
