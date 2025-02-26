import React, { useState } from "react";
import "./Tooltip.css";

const Tooltip = ({ text, children }) => {

  const [visible, setVisible] = useState(false);

  return (
    <div 
      className="tooltip-container"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <div className="tooltip-target"> {children} </div>
      {visible && <div className="tooltip-text"> {text} </div>}
    </div>
  );
};

export default Tooltip;
