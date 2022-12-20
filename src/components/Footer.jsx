import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaSpotify,
  FaApple,
} from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { IconContext } from "react-icons";

<div></div>;
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="icons">
          <IconContext.Provider value={{ className: "icon-style" }}>
            <Link to="#">
              <FaFacebookF />
            </Link>
          </IconContext.Provider>
          <IconContext.Provider value={{ className: "icon-style" }}>
            <Link to="#">
              <FaTwitter />
            </Link>
          </IconContext.Provider>
          <IconContext.Provider value={{ className: "icon-style" }}>
            <Link to="#">
              <TiSocialInstagram />
            </Link>
          </IconContext.Provider>
          <IconContext.Provider value={{ className: "icon-style" }}>
            <Link to="#">
              <FaYoutube />
            </Link>
          </IconContext.Provider>
          <IconContext.Provider value={{ className: "icon-style" }}>
            <Link to="#">
              <FaSpotify />
            </Link>
          </IconContext.Provider>
          <IconContext.Provider value={{ className: "icon-style" }}>
            <Link to="#">
              <FaApple />
            </Link>
          </IconContext.Provider>
        </div>
        <div className="term">
          <Link to="#" className="terms">
            © 2022 ISLAND RECORDS
          </Link>
          <span className="footer-spacers"> | </span>
          <Link to="#" className="terms">
            COOKIES
          </Link>
          <span className="footer-spacers"> | </span>
          <Link to="#" className="terms">
            TERMS
          </Link>
          <span className="footer-spacers"> | </span>
          <Link to="#" className="terms">
            SAFE SURF
          </Link>
          <span className="footer-spacers"> | </span>
          <Link to="#" className="terms">
            PRIVACY
          </Link>
          <span className="footer-spacers"> | </span>
          <Link to="#" className="terms">
            COOKIE CHOICES
          </Link>
          <span className="footer-spacers"> | </span>
          <Link to="#" className="terms">
            DO NOT SELL MY PERSONAL INFORMATION
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
