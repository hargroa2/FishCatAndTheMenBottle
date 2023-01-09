import React from "react";
import { Link } from "react-router-dom";
import fishcat from "../assets/fishcat.png";

const NavShop = () => {
  return (
    <div>
      <header className="nav">
        <Link to="/">
          <img src={fishcat} alt="Logo" />
        </Link>
        <ul>
          <li>
            <Link to="/music">MUSIC</Link>
          </li>
          <li>
            <Link to="/clothing">CLOTHING</Link>
          </li>
          <li>
            <Link to="/accessories">ACCESSORIES</Link>
          </li>
          <li>
            <Link to="/">OFFICIAL SITE</Link>
          </li>
        </ul>
        <Link to="/signup" className="signup">
          SIGNUP
        </Link>
      </header>
    </div>
  );
};

export default NavShop;
