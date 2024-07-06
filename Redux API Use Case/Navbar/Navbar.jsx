import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    // Suggested code may be subject to a license. Learn more: ~LicenseLog:1458356874.
    <div style={{ border: "1px solid black" }}>
      <nav
        style={{
          gap: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "50px",
        }}
      >
        <Link
          style={{
            textDecoration: "none",
            color: "white",
          }}
          to="/"
        >
          Home
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "white",
          }}
          to="/addpost"
        >
          Add Post
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "white",
          }}
          to="/update"
        >
          Update Post
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
