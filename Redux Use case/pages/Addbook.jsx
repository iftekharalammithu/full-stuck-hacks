import React from "react";
import "./addbook.css";
import Navbar from "../Layout/Navbar";

const Addbook = () => {
  return (
    <div className="addbook">
      <div className="container">
        <form>
          <input type="text" placeholder="Book Name" />
          <input type="text" placeholder="Author Name" />
          <button type="submit">Add Book</button>
        </form>
      </div>
    </div>
  );
};

export default Addbook;
