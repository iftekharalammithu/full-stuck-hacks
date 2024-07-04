import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/addbook">Add Book</Link>
        <Link to="/updatebook">Update Book</Link>
      </nav>
    </div>
  );
};

export default Navbar;
