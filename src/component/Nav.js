import { useState } from "react";
import { Link } from "react-router-dom";
import navbar from "../images/bars-solid.svg";
import Xmark from "../images/xmark.svg";
import NavLinks from "./NavLinks";

const Nav = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const handleNavOpen = () => {
    setNavOpen(!isNavOpen);
  };
  const icon = isNavOpen ? Xmark : navbar;

  return (
    <>
      <nav>
        <div className="menu_icon" onClick={handleNavOpen}>
          <img src={icon} alt="menu icon" width={20} />
        </div>
        {isNavOpen && (
          <div className="navbar_overlay">
            <ul className={`navbar_links ${isNavOpen ? "navbar_open" : ""}`}>
              <div className="menu_icon" onClick={handleNavOpen}>
                <img src={icon} alt="menu icon" width={20} />
              </div>
              <li>
                <Link
                  aria-label="Go to home page"
                  to="/"
                  onClick={handleNavOpen}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  aria-label="Go to About page"
                  to="/"
                  onClick={handleNavOpen}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  aria-label="Go to menu page"
                  to="/"
                  onClick={handleNavOpen}
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  aria-label="Go to booking page"
                  to="/bookingpage"
                  onClick={handleNavOpen}
                >
                  Reservation
                </Link>
              </li>
              <li>
                <Link
                  aria-label="Go to order page"
                  to="/"
                  onClick={handleNavOpen}
                >
                  Order Online
                </Link>
              </li>
              <li>
                <Link
                  aria-label="Go to login page"
                  to="/"
                  onClick={handleNavOpen}
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
      <NavLinks />
    </>
  );
};

export default Nav;
