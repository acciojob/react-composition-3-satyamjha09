import React, { useState } from "react";
import "./Tooltip.css"; // Ensure styles are correctly applied

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div 
      className="tooltip"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && <div className="tooltiptext">{text}</div>}
    </div>
  );
};

export default Tooltip;
