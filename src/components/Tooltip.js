import React, { useState } from 'react'

const Tooltip = ({ text , children }) => {

    const [visible, setVisible] = useState(false);


    return (
        <div
          className="tooltip"
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
          style={{ position: "relative", display: "inline-block" }}
        >
          {children}
          <div
            className="tooltiptext"
            style={{
              position: "absolute",
              bottom: "100%",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "black",
              color: "white",
              padding: "5px",
              borderRadius: "5px",
              whiteSpace: "nowrap",
              zIndex: "10",
              visibility: visible ? "visible" : "hidden", // Keep it in DOM, just hide
              opacity: visible ? 1 : 0,
              transition: "opacity 0.2s ease-in-out",
            }}
          >
            {text}
          </div>
        </div>
      );
}

export default Tooltip