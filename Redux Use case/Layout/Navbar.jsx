import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="addbook">Add Book</Link>
        <Link to="updatebook">Update Book</Link>
      </nav>
    </div>
  );
};

export default Navbar;
