import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { postdelete, fatchposts } from "../Redux/PostSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function App() {
  const posts = useSelector((state) => state.configureStore_name.posts);
  const status = useSelector((state) => state.configureStore_name.status);
  const error = useSelector((state) => state.configureStore_name.error);

  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idl") {
      dispatch(fatchposts());
    }
  }, [status, posts]);

  const handledelete = (id) => {
    dispatch(postdelete(id));
    // console.log(id);
  };

  return (
    <>
      <div className="postdata">
        {status === "loading" && <h1> Loading...</h1>}
        {status === "failed" && <h1> Server Not Responding!</h1>}
        {status === "idle" && (
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Post</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {posts &&
                posts.map((post) => {
                  return (
                    <tr key={post.id}>
                      <td>{post.title}</td>
                      <td>{post.body}</td>
                      <td>
                        <Link to="/update" state={post}>
                          <button>Edit</button>
                        </Link>
                        /
                        <button onClick={() => handledelete(post.id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default App;
