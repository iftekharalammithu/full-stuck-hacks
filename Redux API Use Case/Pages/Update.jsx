import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { update_post } from "../Redux/PostSlice";

const Update = () => {
  const location = useLocation();
  const { id, title, body } = location.state;

  const [post_title, settitle] = useState(title);
  const [post_body, setbody] = useState(body);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleupdate = (e) => {
    e.preventDefault();
    dispatch(update_post({ id, post_title, post_body }));
    // console.log(id, post_title, post_body);
    navigate("/");
  };

  return (
    <div>
      <form
        onSubmit={handleupdate}
        style={{
          border: "1px solid black",
          display: "flex",
          height: "300px",
          // flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
          gap: "20px",
        }}
      >
        <div>
          <p>Title:</p>
          <input
            onChange={(e) => settitle(e.target.value)}
            value={post_title}
            style={{
              width: "300px",
              padding: "10px",
              border: "none",
              outline: "none",
              background: "#f2f2f2",
              borderRadius: "5px",
              color: "black",
            }}
            type="text"
          />
        </div>
        <div>
          <p>Post:</p>
          <input
            onChange={(e) => setbody(e.target.value)}
            value={post_body}
            style={{
              width: "300px",
              padding: "10px",
              border: "none",
              outline: "none",
              background: "#f2f2f2",
              borderRadius: "5px",
              color: "black",
            }}
            type="text"
          />
        </div>
        <button style={{ marginTop: "60px" }} type="submit">
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
