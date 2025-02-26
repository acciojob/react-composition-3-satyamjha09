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
     {visible && (
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
        }}
      >
        {text}
      </div>
    )}
  </div>
  )
}

export default Tooltip