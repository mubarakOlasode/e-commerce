import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faHouse } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
import { FaPhoneAlt } from "react-icons/fa";

import "./Header.css";

const Header = ({ onRoute }) => {
  return (
    <div className="navBar">
      <nav className="navbar navbar-expand-lg  navbar-dark bg-primary">
        <div className="container-fluid">
          <h1 className="navbar-brand">Chopify</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to="e-commerce/" className="link">
                <li className="nav-item ">
                  <p className="nav-link active" aria-current="page">
                    <FontAwesomeIcon icon={faHouse} />
                    Home
                  </p>
                </li>
              </Link>

              <Link to="/signup" className="link">
                <li className="nav-item">
                  <p className="nav-link active">
                    register
                    <FontAwesomeIcon icon={faUserPlus} />
                  </p>
                </li>
              </Link>
              <Link to="/signup" className="link">
                <li className="nav-item">
                  <p className="nav-link active">
                    Who we are
                    <FontAwesomeIcon icon={faAddressBook} />
                  </p>
                </li>
              </Link>
              <Link to="/signup" className="link">
                <li className="nav-item">
                  <p className="nav-link active">
                    <FaPhoneAlt />
                    Contact Us
                    <FontAwesomeIcon icon="fa-regular fa-address-book" />
                  </p>
                </li>
              </Link>
            </ul>
            <Link to="/signIn" className="link" onClick={() => onRoute("home")}>
              <button
                type="button"
                className="btn btn-light rounded-pill signIn-btn"
              >
                Sign in
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
