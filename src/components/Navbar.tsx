import React from "react";

import "./navbarButtons.css";
import "./navbar.css";
import "../Logo.svg";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo"></div>
          <ul className="nav-items">
            <button className="button-89 ">About</button>
          </ul>
          <ul className="nav-items">
            <button className="button-89 " type="button">
              Reviews
            </button>
          </ul>
          <ul className="nav-items">
            <button className="button-89 ">Contacts</button>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
