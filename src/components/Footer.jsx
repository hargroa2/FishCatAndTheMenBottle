import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="icons">
          <FaFacebookF color="white" />
          <FaTwitter color="white" />
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
