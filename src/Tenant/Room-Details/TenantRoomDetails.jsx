import React from "react";
import { useState } from "react";
import "./TenantRoomDetails.scss";

function TenantRoomDetails() {
  const [roomtype, setRoomtype] = useState('');

  const form2handler = (event) => {
    event.preventDefault();
    console.log("your details has been submitted", { roomtype });
    setRoomtype("");
  };

  

  return (
    <form onSubmit={form2handler}>
     
      <div className="Room-details">
        <div className="input-Field">
          <label htmlFor="Roomtype">Room Type :</label>
          <input
            type="text"
            id="roomtype"
            value={roomtype}
            onChange={(e) => setRoomtype(e.target.value)}
          />
        </div>

        <div className="availability">
          <h1>Available facilities</h1>
          <label htmlFor="Car Parking">Car Parking</label>
          <select name="Parking" id="Parking">
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      <label htmlFor="Balcony">Balcony</label>
          <select name="Balcony" id="Balcony">
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      <label htmlFor="Shop">Nearby kirana shops</label>
          <select name="Shop" id="Shop">
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      <label htmlFor="gate" >Personal main gate</label>
       <select name="gate" id="gate">
        <option value="yes">Yes</option>
        <option value="no">No</option>
       </select>

       <label htmlFor="Restrication">Friends Restrication</label>
       <select name="Restrication" id="Restrication">
        <option value="yes">Yes</option>
        <option value="no">No</option>
       </select>
        </div>

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
    </form>
  );
}

export default TenantRoomDetails;
