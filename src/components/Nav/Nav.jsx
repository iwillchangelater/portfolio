import React from "react";
import "./Nav.css";
function Nav() {
  return (
    <nav>
      <div className="nav">
        <a href="#">
          <span style={{ color: "red" }}>Prot</span>Folio
        </a>
        <li>
          <ul className="nav-container">
            <li className="nav-item">
              <a href="#about">About</a>
            </li>
            <li className="nav-item">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </li>
      </div>
    </nav>
  );
}

export default Nav;
