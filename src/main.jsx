import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./Layout.jsx";
import Home from "./Components/Home/Home.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AboutUs from "./Components/AboutUs/AboutUs.jsx";
import ContactUs from "./Components/ContactUs/ContactUs.jsx";
import FilterBox from "./Cards/FilterContainer/FilterBox.jsx";
import Placedetails from "./Cards/Placedetails/Placedetails.jsx";
import SignUp from "./Pages/SignUp/SignUp.jsx";
import Login from "./Pages/Login/Login.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="About" element={<AboutUs />} />
      <Route path="Contact" element={<ContactUs />} />
      <Route path="filterbox" element={<FilterBox />} />
      <Route path="placedetails" element={<Placedetails />} />
      <Route path="Login" element={<Login />} />
      <Route path="SignUp" element={<SignUp />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     {/*  <RouterProvider router={router} />  */}
    <Placedetails/>
      </React.StrictMode>
);
