import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navbar from "../Navbar/Navbar.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Addpost from "../Pages/Addpost.jsx";
import Update from "../Pages/Update.jsx";

import { Provider } from "react-redux";
import store from "../Redux/Store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/addpost" element={<Addpost />} />
        <Route path="/update" element={<Update />}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
