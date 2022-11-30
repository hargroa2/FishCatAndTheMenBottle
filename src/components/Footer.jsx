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

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="icons">
          <IconContext.Provider value={{ className: "icon-style" }}>
            <FaFacebookF />
          </IconContext.Provider>
          <IconContext.Provider value={{ className: "icon-style" }}>
            <FaTwitter />
          </IconContext.Provider>
          <IconContext.Provider value={{ className: "icon-style" }}>
            <TiSocialInstagram />
          </IconContext.Provider>
          <FaYoutube />
          <FaSpotify />
          <FaApple />
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
