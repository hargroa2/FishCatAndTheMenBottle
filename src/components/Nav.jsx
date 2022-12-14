import React from "react";
import { Link } from "react-router-dom";
import fishcat from "../assets/fishcat.png";

const Nav = () => {
  return (
    <div>
      <header className="nav">
        <Link to="/">
          <img src={fishcat} alt="Logo" />
        </Link>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/live">LIVE</Link>
          </li>
          <li>
            <Link to="/video">VIDEO</Link>
          </li>
          <li>
            <Link to="/photos">PHOTOS</Link>
          </li>
          <li>
            <Link to="/lyrics">LYRICS</Link>
          </li>
          <li>
            <Link to="/shop">SHOP</Link>
          </li>
        </ul>
        <Link to="/signup" className="signup">
          SIGNUP
        </Link>
      </header>
    </div>
  );
};

export default Nav;
