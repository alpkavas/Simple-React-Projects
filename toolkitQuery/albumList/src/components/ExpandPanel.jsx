import React from "react";
import "../css/ExpandPanel.css";
import { FcPrevious, FcExpand } from "react-icons/fc";
import { useState } from "react";

function ExpandPanel({ children, header }) {
  const [isOpen, setisOpen] = useState(false);

  const handleClick = () => {
    setisOpen(!isOpen);
  };

  return (
    <div className="panelContainer">
      <div className="headerList">
        <div className="headerList">{header}</div>
        <div className="arrowBtn" onClick={handleClick}>
          {isOpen ? <FcExpand /> : <FcPrevious />}
        </div>
      </div>
      {isOpen && <div>{children}</div>}
    </div>
  );
}

export default ExpandPanel;
