import React, { useState } from "react";
import "./Tooltip.css";

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="tooltip"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      <div className={`tooltiptext ${visible ? "visible" : "hidden"}`} role="tooltip">
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
