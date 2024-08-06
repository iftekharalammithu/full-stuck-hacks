import { create } from "zustand";

const Use_Count_Number = create((set) => ({
  select_Button: null,
  setSelect_Button: (payload) => set({ select_Button: payload }),
  Count: 0,
  setCount: (payload) => set({ Count: payload }),
}));

export default Use_Count_Number;
