import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { updatebook } from "../Redux/BookSlice";

const Updatebook = () => {
  const location = useLocation();
  const id = location.state.id;

  const [title, settitle] = useState(location.state.title);
  const [author, setauthor] = useState(location.state.author);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleaddbook = (e) => {
    e.preventDefault();
    dispatch(updatebook({ id, title, author }));
    navigate("/");
  };

  const handleInputChangeTitle = (event) => {
    settitle(event.target.value);
  };
  const handleInputChangeAuthor = (event) => {
    setauthor(event.target.value);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
        onSubmit={handleaddbook}
      >
        <input
          onChange={handleInputChangeTitle}
          value={title}
          style={{
            width: "300px",
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            outline: "none",
          }}
          type="text"
          required
        />
        <input
          onChange={handleInputChangeAuthor}
          value={author}
          style={{
            width: "300px",
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            outline: "none",
          }}
          type="text"
          required
        />
        <button
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            width: "100px",
          }}
          type="submit"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Updatebook;
