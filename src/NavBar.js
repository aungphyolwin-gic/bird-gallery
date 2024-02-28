import React from "react";
import brand from "./img/bird-amozon.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const NavBar = () => {
  return (
    <div className="mb-5 bg-black">
      <nav class="navbar navbar-expand-lg navbar-light bg-dark ">
        <div class="container ">
          <Link class="navbar-brand" to="/">
            <img src={brand} alt="bird logo" height={40} />
          </Link>
          <div class="navbar-collapse justify-content-center" id="navbarNav">
            <ul class="navbar-nav ">
              <li class="nav-item">
                <Link class="nav-link text-light" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-light" to="/birds">
                  Birds
                </Link>
              </li>
            </ul>
          </div>
            <button class="btn btn-secondary">Let's fly</button>
        </div>
      </nav>
    </div>
  );
};
