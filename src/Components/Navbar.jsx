import React from "react";

const Navbar = (props) => {
  return (
    <header className="nav-container">
      <img src={props.image} />
      <h1> This is our {props.text}</h1>
    </header>
  );
};

export default Navbar;
