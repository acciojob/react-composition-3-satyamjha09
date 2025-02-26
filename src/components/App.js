import React from "react";
import Tooltip from "./Tooltip";
import "./Tooltip.css"; // Ensure styles are correctly applied

const App = () => {
  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <Tooltip text="This is a tooltip for a heading">
        <h2>Hover over this heading</h2>
      </Tooltip>

      <Tooltip text="Tooltip for a paragraph">
        <p>Hover over this paragraph</p>
      </Tooltip>

      <Tooltip text="Tooltip for a button">
        <button>Hover over this button</button>
      </Tooltip>
    </div>
  );
};

export default App;
