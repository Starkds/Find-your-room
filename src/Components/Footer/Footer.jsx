import React from "react";
import { FaGithub } from "react-icons/fa";
import "./Footer.scss";
import { Link } from 'react-router-dom'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <>

      <div className="Footer">
    <div className="Information">

        <div className="Support">
          <p>Help centre</p>
          <p> Cancellation options</p>
          <p>Anti-descrimination</p>
        </div>

        <div className="Contact-us">
          <p>know about us</p>
          <p>Contact us</p>
          <p>Community</p>
        </div>
</div>

        <div className="links">
          <div className="Email">FYR@gmail.com.in</div>


          <div className="icons">
           <Link to='https://github.com/starkds'><FaGithub/></Link>
           <Link to='https://www.linkedin.com/in/pawanpatidar110/'><FaLinkedin/></Link>
           <Link to='https://www.instagram.com/patidarpawan110/' ><FaInstagram/></Link>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default Footer;
