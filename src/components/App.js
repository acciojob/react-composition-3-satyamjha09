import React from "react";
import Tooltip from "./Tooltip";

const App = () => {
  
  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      

      <Tooltip text="This is a Tooltip">
        <p className="tooltip">Hover over this paragraph</p>
      </Tooltip>

      <Tooltip text="This is another Tooltip">
        <button className="tooltip">Hover over this button</button>
      </Tooltip>
    </div>
  );
};

export default App;
