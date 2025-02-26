import React from "react";
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <Tooltip text="Tooltip for Heading">
        <h2 className="tooltip">Hover over this heading</h2>
      </Tooltip>

      <Tooltip text="Tooltip for Paragraph">
        <p className="tooltip">Hover over this paragraph</p>
      </Tooltip>

      <Tooltip text="Tooltip for Button">
        <button className="tooltip">Hover over this button</button>
      </Tooltip>
    </div>
  );
};

export default App;
