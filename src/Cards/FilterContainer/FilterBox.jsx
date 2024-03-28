import React from "react";
import "./FilterBox.scss";
import { ImCross } from "react-icons/im";
import { FiMapPin } from "react-icons/fi";
function FilterBox() {
  return (
    <>
      <div className="Filtered-Container">
        <div className="React-icons">
          <div className="map-icon">
            <h3>current location</h3>
            <FiMapPin />
          </div>
          <div className="cross-icon">
            <ImCross />
          </div>
        </div>
        <div className="Location">
          <div className="input-1">
            <div className="Country">
              <label>Country</label>
              <input type="text" placeholder="" />
            </div>
            <div className="State">
              <label>State</label>
              <input type="text" placeholder="" />
            </div>
          </div>

          <div className="input-2">
            <div className="City">
              <label>City</label>
              <input type="text" placeholder="" />
            </div>

            <div className="Area">
              <label>Area</label>
              <input type="text" placeholder="" />
            </div>
          </div>
        </div>

        <div className="Rental-type">
          <div className="Rental">Rental type</div>
          <div className="Home ">Home</div>
          <div className="Room">Room</div>
        </div>

        <div className="Price-range">
          <div className="Min">
            <label>Min Price</label>
            <input type="text" placeholder="" />
          </div>

          <div className="Max">
            <label>Max Price</label>
            <input type="text" placeholder="" />
          </div>
        </div>

        <div className="Availability">
          <div className="Avail">
            <label>Parking area</label>
            <input type="checkbox" />
          </div>

          <div className="Avail">
            <label>Garden</label>
            <input type="checkbox" />
          </div>

          <div className="Avail">
            <label>Market</label>
            <input type="checkbox" />
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterBox;
