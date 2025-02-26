
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
        <h1> React Tootip  </h1>
        <Tooltip text="this is a tooltip for the button">
          <button style={{ marginRight: "20px" }}>Hover me</button>
        </Tooltip>
        <Tooltip text="Another tooltip for a text">
          <span style={{ color: "blue" , cursor: "pointer"  }}> Hover over me! </span>
        </Tooltip>
    </div>
  )
}

export default App
