import React, { useState } from "react";
import "./Tooltip.css";

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="tooltip"
      onMouseEnter={() => setTimeout(() => setVisible(true), 100)} // Delay for Cypress
      onMouseLeave={() => setTimeout(() => setVisible(false), 100)}
    >
      {children}
      <div
        className={`tooltiptext ${visible ? "visible" : "hidden"}`}
        role="tooltip"
        data-testid="tooltip" // Helps Cypress detect it
      >
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
