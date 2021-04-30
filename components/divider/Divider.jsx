import React from "react";
import "./Divider.css";

function Divider({ text }) {
  return (
    <div className="divider">
      <span></span>
      <h3>{text}s</h3>
      <span></span>
    </div>
  );
}

export default Divider;
