import React from "react";
import brand from "./img/bird-amozon.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const NavBar = () => {
  return (
    <div className="mb-5 bg-black">
      <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
        <div className="container ">
          <Link className="navbar-brand" to="/">
            <img src={brand} alt="bird logo" height={40} />
          </Link>
          <div className="navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link text-light" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/birds">
                  Birds
                </Link>
              </li>
            </ul>
          </div>
            <button className="btn btn-secondary rounded-4">Let's fly</button>
        </div>
      </nav>
    </div>
  );
};
