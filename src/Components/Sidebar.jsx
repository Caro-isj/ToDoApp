import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar-cont">
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/create-item">Add</Link>
        </li>
        <li>
          <Link to="/update-item">Update</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
