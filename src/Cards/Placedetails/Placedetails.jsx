import React from "react";
import "./Placedetails.scss";
function Placedetails() {
  return (
    <>
      <div className="Living-Info">
        <div className="Room-title">
          <h1>3-BHK and one garden</h1>
        </div>
        <div className="Location-media">
          <div className="Videos">
            <video
              src="./images/Location-media/videos/video1.mp4"
              type="video/mp4"
            />
          </div>

          <div className="Images">
            <img
              className="Bedroom"
              src="./images/Location-media/image/Bedroom1.jpg"
            />
            <img
              className="Kitchen"
              src="./images/Location-media/image/Kitchen1.jpg"
            />
            <img
              className="Bathroom"
              src="./images/Location-media/image/Bathroom1.jpg"
            />
            <img
              className="Kitchen"
              src="./images/Location-media/image/Kitchen2.jpg"
            />
          </div>
        </div>

        <div className="description-pricing">
          <div className="Room-details">
            <h4>3 BHK with one balcony , garden , car parking area</h4>
            <h4>AREA: near main road , hanuman mandir , c-34 building</h4>
          </div>
          <div className="Room-pricing">
            <div className="price-tag">
              <label>Time:</label>
              <input type="text" placeholder="" />
            </div>
            <div className="price-tag">
              <label>persons :</label>
              <input type="text" placeholder="" />
            </div>
            <div className="price-tag">
              <label>Price:</label>
              <input type="number" placeholder="" />
            </div>
          </div>
        </div>

        <div className="Facilities">
          <div className="Facility">
            <h1>Facility</h1>
            <h4>Car parking </h4>
            <h4>Garden</h4>
            <h4>balcony</h4>
            <h4>personal main gate</h4>
          </div>
          <div className="Limitation">
            <h1>Limitations</h1>
            <h4>No alcohol </h4>
            <h4>No non-veg item</h4>
            <h4>No girlfriends at night</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Placedetails;
