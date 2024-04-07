import React from "react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import "./TenantForm.scss";

function TenantForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const form3handler = (event) => {
    event.preventDefault();

    console.log("your form is submitted", {
      name,
      email,
      mobile,
      city,
      state,
      country,
      password,
    });

    setName("");
    setEmail("");
    setMobile("");
    setCity("");
    setState("");
    setCountry("");
    setPassword("");
    setAddress("");
  };

  return (
    <form onSubmit={form3handler}>
      <div className="Tenant-Form">
        <div className="Field">
          <label htmlFor="Name">Name :</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="Field">
          <label htmlFor="Email">Email :</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="Field">
          <label htmlFor="Password"> Password :</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="Field">
          <label htmlFor="Mobile">Mobile</label>
          <input
            type="number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </div>

        <div className="Field">
          <label htmlFor="Address">Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="Combo">
        <div className="Field-box">
          <label htmlFor="City">City</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div className="Field-box">
          <label htmlFor="State">State</label>
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </div>
        <div className="Field-box">
          <label htmlFor="Country">Country</label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>
        </div>
        <div className="Login-Button">
        <Link to="/TenantRoomDetails"><button>Submit</button></Link>
          
        </div>

        <div className="SignUp-Link">
          <div className="Google">
            <FcGoogle /> SignUp with Google
          </div>
        </div>
      </div>
    </form>
  );
}

export default TenantForm;
