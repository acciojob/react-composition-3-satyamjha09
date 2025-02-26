
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>React Tooltip Example</h1>

      <h2>
        <Tooltip text="This is a tooltip for the button">
          <button>Hover me</button>
        </Tooltip>
      </h2>

      <p>
        <Tooltip text="Another tooltip for a text">
          <span style={{ color: "blue", cursor: "pointer" }}>Hover over me!</span>
        </Tooltip>
      </p>
    </div>
  )
}

export default App
