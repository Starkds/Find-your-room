import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { BsFillFilterSquareFill } from "react-icons/bs";

function Header() {
  return (
    <>
      <div className="Header">
        <Link to="./filterBox"className="Filter" >
        <h3>Filter</h3>
          <BsFillFilterSquareFill />
        </Link>
        <div className="Location-finder">
          <ul>
            <li className="Destination">
              <label>where</label>
              <input type="text" placeholder="" />
            </li>

            <li className="Starting-date">
              <label>to</label>
              <input type="text" placeholder="" />
            </li>

            <li className="Ending-date">
              <label>from</label>
              <input type="text" placeholder="" />
            </li>

            <li className="persons">
              <label>person</label>
              <input type="number" placeholder="" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
