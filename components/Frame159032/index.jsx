import React from "react";
import Plus from "../Plus";
import "./Frame159032.css";

function Frame159032(props) {
  const { text129, plusProps } = props;

  return (
    <div className="frame-159 border-1px-black-2">
      <div className="text valign-text-middle typographyheadlineh4-extrabold-24">{text129}</div>
      <Plus src={plusProps.src} />
    </div>
  );
}

export default Frame159032;
