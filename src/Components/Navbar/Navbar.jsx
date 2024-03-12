import React from "react";
import './Navbar.scss'
function Navbar() {
  return (
    <nav>
      <div className="Navbar">
        <div className="Logo">
          <img src="./images/Company-logo.png" />
        </div>
        <div className="Nav-list">
        <ul className="list">
          <li>
            <a className="Home" href="">
              Home
            </a>
          </li>
          <li>
            <a className="About-us" href="">
              {" "}
              About us
            </a>
          </li>
          <li>
            <a className="Contact-us" href="">
              Contact us
            </a>
          </li>
        </ul>
      
        </div>

        <div className="Search-bar">
          <button>  Sign Up/ login</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
