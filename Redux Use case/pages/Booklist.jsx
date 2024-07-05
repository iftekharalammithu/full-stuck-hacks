import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletebook } from "../Redux/BookSlice";

const Booklist = () => {
  const books = useSelector((state) => state.bookreduser.book);
  const navigate = useNavigate();
  // console.log(books);
  const dispatch = useDispatch();
  const handledelete = (id) => {
    // console.log(id);
    dispatch(deletebook(id));
  };

  return (
    <div>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Book Name</th>
              <th>Author</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {books &&
              books.map((book) => {
                const { id, title, author } = book;
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{author}</td>
                    <td>
                      <Link to="/updatebook" state={{ id, title, author }}>
                        <button>Edit</button>/
                      </Link>
                      <button onClick={() => handledelete(id)}>Delete</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booklist;
