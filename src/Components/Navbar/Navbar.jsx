import React from "react";
import {Link, NavLink} from "react-router-dom";
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
                                <NavLink to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Contact">
                                    Contact 
                                </NavLink>
                            </li>
        </ul>
      
        </div>

        <div className="Search-bar">
        <Link to="/Login">
        <button>login</button>
        </Link>
         
         <Link to="/TenantForm">
         <button>Become a Tenant</button>
         </Link>
       
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
