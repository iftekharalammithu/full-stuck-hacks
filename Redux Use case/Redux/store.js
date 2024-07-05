import { configureStore } from "@reduxjs/toolkit";
import bookreduser from "./BookSlice";

const store = configureStore({
  reducer: {
    bookreduser: bookreduser,
  },
});

export default store;
