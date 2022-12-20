import React from "react";
import "../Styles/Navbar.css";
function Header() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar__logo"></div>
        <ul className="navbar__links">
          <li className="navbar__link-one">Find Teachers</li>
          <li className="navbar__link-two">Become a teacher</li>
        </ul>
        <div className="navbar__navigation">
          <span class="material-icons navbar__icon">login</span>
          <span className="navbar__button">Log in</span>
        </div>
      </nav>
    </div>
  );
}

export default Header;
