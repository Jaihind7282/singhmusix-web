import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { MenuItems } from "./MenuItems";

function Navbar() {
  const [state, setState] = useState({ clicked: false });
  const handleClick = () => {
    setState({ clicked: !state.clicked });
  };

  const handleMenuItemClick = () => {
    setState({ clicked: false });
  };

  const handleMouseLeave = () => {
    setState({ clicked: false });
  };

  const handleScroll = () => {
    setState({ clicked: false });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="NavbarItems" onMouseLeave={handleMouseLeave}>
      <a href="/">
        <img src="images/logo.png" className="logo" alt="logoImage" />
      </a>

      <div className="menu-icons" onClick={handleClick}>
        <i className={state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={state.clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((itme, index) => {
          return (
            <li key={index}>
              <Link
                className={itme.cName}
                to={itme.url}
                onClick={handleMenuItemClick}
              >
                {itme.title}
              </Link>
            </li>
          );
        })}
        <Link to="/register" className="button-on-navbar">
          <h2>Register Now</h2>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
