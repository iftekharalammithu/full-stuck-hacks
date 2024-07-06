import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  status: "idl",
  error: null,
};

// in this post and fatchposts mean the name of postslice in post and the fatchposts is the api call fanction
export const fatchposts = createAsyncThunk("post/fatchposts", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
});

export const postslice = createSlice({
  name: "post",
  initialState: initialState,
  reducers: {
    postdelete: (state, action) => {
      const deletepost = state.posts.filter(
        (post) => post.id !== action.payload
      );
      state.posts = deletepost;
    },
    update_post: (state, action) => {
      console.log(action.payload);
      const { id, post_title, post_body } = action.payload;
      state.posts.map((post) => {
        if (post.id === id) {
          post.title = post_title;
          post.body = post_body;
        }
        return post;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fatchposts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fatchposts.fulfilled, (state, action) => {
      state.status = "idle";
      state.posts = action.payload;
    });
    builder.addCase(fatchposts.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export const { postdelete, update_post } = postslice.actions;
export default postslice.reducer;
