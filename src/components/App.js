import React from "react";
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>React Tooltip Component</h1>
      <Tooltip text="This is a tooltip!">
        <button>Hover over me</button>
      </Tooltip>
      <br /><br />
      <Tooltip text="Another tooltip example">
        <span style={{ textDecoration: "underline", cursor: "pointer" }}>
          Hover over this text
        </span>
      </Tooltip>
    </div>
  );
};

export default App;