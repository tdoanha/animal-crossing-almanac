import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeNavMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeNavMenu}>
            <i class="fa-solid fa-book"></i> AC Almanac
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/fish" className="nav-links" onClick={closeNavMenu}>
                Fish
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/bugs" className="nav-links" onClick={closeNavMenu}>
                Bugs
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sea-creatures"
                className="nav-links"
                onClick={closeNavMenu}
              >
                Sea Creatures
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/fossils" className="nav-links" onClick={closeNavMenu}>
                Fossils
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/artwork" className="nav-links" onClick={closeNavMenu}>
                Artwork
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/clothing" className="nav-links" onClick={closeNavMenu}>
                Clothing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/furniture"
                className="nav-links"
                onClick={closeNavMenu}
              >
                Furniture
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/interior-items"
                className="nav-links"
                onClick={closeNavMenu}
              >
                Interior Items
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tools" className="nav-links" onClick={closeNavMenu}>
                Tools
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/photos" className="nav-links" onClick={closeNavMenu}>
                Photos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/recipes" className="nav-links" onClick={closeNavMenu}>
                Recipes
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/misc" className="nav-links" onClick={closeNavMenu}>
                Misc
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/events" className="nav-links" onClick={closeNavMenu}>
                Events
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
