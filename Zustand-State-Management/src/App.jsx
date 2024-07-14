import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Use_Count_Number from "./Zustand/Zustand_hook";

function App() {
  const { Count, setCount, select_Button, setSelect_Button } =
    Use_Count_Number();

  const increase_handle = () => {
    setCount(Count + 1);
    setSelect_Button("Increase");
  };
  const decease_handle = () => {
    setCount(Count - 1);
    setSelect_Button("Decease");
  };

  return (
    <div>
      <h1>{Count}</h1>
      <h3>{select_Button}</h3>
      <div className="buttons">
        <button onClick={increase_handle}>Increase </button>
        <button onClick={decease_handle}>Decease </button>
      </div>
    </div>
  );
}

export default App;
