import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <header className="nav-container">
      <Link to="/">
        <img src={props.image} alt="Logo" />{" "}
      </Link>
      <h1>{props.text}</h1>
    </header>
  );
};

export default Navbar;
