import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Addbook from "../pages/Addbook.jsx";
import Updatebook from "../pages/Updatebook.jsx";
import Navbar from "../Layout/Navbar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/addbook" element={<Addbook />}></Route>
        <Route path="/updatebook" element={<Updatebook />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
