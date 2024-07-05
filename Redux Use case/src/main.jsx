import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Addbook from "../pages/Addbook.jsx";
import Updatebook from "../pages/Updatebook.jsx";
import Navbar from "../Layout/Navbar.jsx";
import { Provider } from "react-redux";
import store from "../Redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/addbook" element={<Addbook />}></Route>
        <Route path="/updatebook" element={<Updatebook />}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
