import { createSlice } from "@reduxjs/toolkit";

const inisialbook = {
  book: [
    { id: 1, title: "The Earth", author: "Nil Amstrong" },
    { id: 2, title: "Microsoft Book", author: "Bill gates" },
  ],
};

export const bookslice = createSlice({
  name: "bookslicename",
  initialState: inisialbook,
  reducers: {
    showbook: (state) => {
      return state;
    },
    addbook: (state, action) => {
      state.book.push(action.payload);
    },
    deletebook: (state, action) => {
      state.book = state.book.filter((book) => book.id !== action.payload);
    },
    updatebook: (state, action) => {
      const { id, title, author } = action.payload;
      const book = state.book.find((book) => book.id === id);
      if (book) {
        book.title = title;
        book.author = author;
      }
    },
  },
});

export const { showbook, addbook, deletebook, updatebook } = bookslice.actions;

export default bookslice.reducer;
