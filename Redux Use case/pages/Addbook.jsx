import React from "react";
import "./addbook.css";
import Navbar from "../Layout/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { addbook } from "../Redux/BookSlice";
import { Navigate, useNavigate } from "react-router-dom";

const Addbook = () => {
  const book = useSelector((state) => state.bookreduser.book);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleaddbook = (e) => {
    e.preventDefault();
    const bookname = e.target[0].value;
    const authorname = e.target[1].value;
    const id = book.length + 1;
    dispatch(addbook({ id, title: bookname, author: authorname }));
    navigate("/");
  };

  return (
    <div className="addbook">
      <div className="container">
        <form onSubmit={handleaddbook}>
          <input type="text" placeholder="Book Name" />
          <input type="text" placeholder="Author Name" />
          <button type="submit">Add Book</button>
        </form>
      </div>
    </div>
  );
};

export default Addbook;
