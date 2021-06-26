import React from "react";
import "./Close.css";

function Close(props) {
  const { src } = props;

  return (
    <div className="close">
      <img className="vector-9" src={src} />
    </div>
  );
}

export default Close;
