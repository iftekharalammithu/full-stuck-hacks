import { configureStore } from "@reduxjs/toolkit";
import postslice from "./PostSlice";

// the postslice is this postslice.reducer  and it should be import with out bracket
const store = configureStore({
  reducer: {
    configureStore_name: postslice,
  },
});

export default store;
